import { useRef, useState } from "react";
import { audio } from "@/content/site";

type AudioContextWindow = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext;
  };

/**
 * Background music + UI sound effects.
 * Starts after the visitor's first interaction when the browser allows it.
 * Add your own audio file path in src/content/site.ts.
 */
export function useSound() {
  const [enabled, setEnabled] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);

  /** Soft synthesized chime — no copyrighted assets needed. */
  const play = (freq = 660) => {
    if (!enabled || typeof window === "undefined") return;
    try {
      const Ctx = window.AudioContext ?? (window as AudioContextWindow).webkitAudioContext;
      if (!Ctx) return;
      ctxRef.current ??= new Ctx();
      const ctx = ctxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.1);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch {
      /* audio unavailable — stay silent */
    }
  };

  return { enabled, setEnabled, play };
}

export function SoundControls({
  enabled,
  onToggle,
  visible = true,
}: {
  enabled: boolean;
  onToggle: (v: boolean) => void;
  visible?: boolean;
}) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const sources = audio.sources ?? [
    audio.src,
    `${import.meta.env.BASE_URL}audio/ENHYPEN - Highway 1009 [320 kbps].mp3`,
  ];
  const labels = audio.labels ?? ["Moonstruck", "Highway 1009"];

  const selectTrack = (index: number) => {
    const el = ref.current;
    if (!el) return;

    if (index === trackIndex && playing) {
      el.pause();
      setPlaying(false);
      return;
    }

    setTrackIndex(index);
    el.src = sources[index];
    void el
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  };

  return (
    <div
      className={`glass-soft fixed bottom-5 left-5 z-40 flex flex-col items-stretch gap-2 rounded-2xl px-3 py-2 ${
        visible ? "" : "pointer-events-none opacity-0"
      }`}
    >
      {sources.length ? (
        <>
          <audio
            ref={ref}
            src={sources[trackIndex]}
            onEnded={() => setPlaying(false)}
            preload="metadata"
          />
          {sources.map((_, index) => (
            <button
              key={sources[index]}
              onClick={() => selectTrack(index)}
              aria-label={`${playing && trackIndex === index ? "Pause" : "Play"} ${labels[index] ?? `Track ${index + 1}`}`}
              className="text-left font-mono text-[0.58rem] uppercase tracking-widest text-silver transition-opacity hover:opacity-70"
            >
              {playing && trackIndex === index ? "❚❚" : "▶"} {labels[index] ?? `Track ${index + 1}`}
            </button>
          ))}
          <span className="my-1 h-px w-full bg-border" />
        </>
      ) : null}
      <button
        onClick={() => onToggle(!enabled)}
        aria-pressed={enabled}
        aria-label="Toggle sound effects"
        className="font-mono text-[0.58rem] uppercase tracking-widest text-muted-foreground transition-colors hover:text-silver"
      >
        SFX {enabled ? "ON" : "OFF"}
      </button>
    </div>
  );
}
