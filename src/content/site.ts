/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING HERE.
 *  This single file holds all the text of the experience.
 *  Replace the [PLACEHOLDERS] with your own words.
 * ─────────────────────────────────────────────────────────────
 */

export const person = {
  name: "Rema",
  birthday: "7/11/2009",
  role: "Dream Chaser",
  superpower: "Never Give Up",
  specialSkill: "Turning Dreams Into Reality",
  era: "The Best One Yet",
  /** Optional: put an image in src/assets and import it, or use a URL. */
  photo: "",
};

export const intro = {
  lines: [
    `${person.name} IS MAKING HER COMEBACK...`,
    " Welcome To Rema's New Era.",
    "HAPPY BIRTHDAY Rema! 🎉",
  ],
  button: "Click Here To Start →",
};

export const chapters = {
  one: {
    label: "CHAPTER 01",
    title: "It's Your Birthday, Rema!",
    subtitle: "There are probably a million things i could say today, but somehow, none of them feel enough.",
    body: [
      "[Write something about the moment you met, or how this year began.]",
      "[Another line — keep it short and cinematic.]",
    ],
  },
  two: {
    label: "CHAPTER 02",
    title: "THE GIFT",
    subtitle: "Tap the box. Something is waiting inside.",
    giftMessage: "[YOUR PERSONAL MESSAGE HERE]",
    giftSignature: "— [YOUR NAME]",
  },
  three: {
    label: "CHAPTER 03",
    title: "THE MAIN CHARACTER",
    subtitle: "Artist profile — debut era",
  },
  four: {
    label: "Let The Music Play",
    title: "Let's Celebrate With Enhypen",
    subtitle: "A Celebration For Rema's Birthday",
    albumTitle: "Let's Sing With Enhypen",
    albumMeta: "FULL LENGTH · 6 TRACKS · RELEASED TODAY",
  },
  memories: {
    label: "B-SIDE",
    title: "MEMORIES FROM THIS ERA",
    subtitle: "[Add your photos and screenshots here later]",
  },
  remember: {
    label: "INTERLUDE",
    title: "THINGS I WANT YOU TO REMEMBER",
    subtitle: "",
  },
  final: {
    label: "FINAL TRACK",
    title: "A MESSAGE FOR YOU",
    subtitle: "",
  },
};

export const tracks = [
  {
    no: "1",
    title: "Two Fools",
    duration: "2:22",
    audioSrc: "/audio/track-01-new.mp3",
    message: "[Write your wish about her new dreams here.]",
  },
  {
    no: "2",
    title: "Stuck",
    duration: "2:32",
    audioSrc: "/audio/track-02.mp3",
    message: "[Write your wish about her happiness here.]",
  },
  {
    no: "3",
    title: "Bloody Paradise",
    duration: "2:11",
    audioSrc: "/audio/track-03.mp3",
    message: "[Write your wish about the memories ahead.]",
  },
  {
    no: "4",
    title: "Checkmate",
    duration: "2:23",
    audioSrc: "/audio/track-04.mp3",
    message: "[Write about everything she deserves.]",
  },
  {
    no: "5",
    title: "Highlight",
    duration: "3:13",
    audioSrc: "/audio/track-05.mp3",
    message: "[Write your final wish here.]",
  },
  {
    no: "6",
    title: "Bad For You",
    duration: "3:15",
    audioSrc: "/audio/track-06.mp3",
    message: "[Write your bonus track wish here.]",
  },
];

/** Add your own photos: import them from src/assets and set `src`. */
export const memories: { caption: string; date: string; src?: string }[] = [
  { caption: "[MEMORY 01]", date: "[DATE]" },
  { caption: "[MEMORY 02]", date: "[DATE]" },
  { caption: "[MEMORY 03]", date: "[DATE]" },
  { caption: "[MEMORY 04]", date: "[DATE]" },
  { caption: "[MEMORY 05]", date: "[DATE]" },
  { caption: "[MEMORY 06]", date: "[DATE]" },
];

export const reminders = [
  "You are stronger than you think.",
  "You are smarter than your fears.",
  "You deserve the things you dream about.",
  "Never forget how special you are.",
];

export const finale = {
  opening: "And if this year ever makes you doubt yourself...",
  lines: ["Come back here.", "Read this again.", "And remember..."],
  belief: "Someone believes in you more than you know. 🤍",
  headline: `HAPPY BIRTHDAY, ${person.name}`,
  welcome: "WELCOME TO YOUR NEW ERA. ✨",
  signature: "Made with 🤍 by Yaso Hasabo",
};

export const easterEgg = {
  hint: "Some stars are worth touching.",
  title: "HIDDEN TRACK",
  message: "[YOUR SECRET MESSAGE HERE — only she will find this one.]",
};

/**
 * Background music.
 * Put an audio file in /public (e.g. /public/audio/theme.mp3) and set the path.
 * Leave empty to keep the player silent — nothing ever autoplays.
 */
export const audio = {
  src: "/audio/moonstruck.mp3", // path to your file
  label: "Moonstruck", // name shown in the player
};

