import type { CreatureKey } from "./creatures";

export type QuizAnswer = {
  label: string;
  creature: CreatureKey;
};

export type QuizQuestion = {
  prompt: string;
  answers: QuizAnswer[];
};

export const QUESTIONS: QuizQuestion[] = [
  {
    prompt: "Pick your ideal study soundtrack.",
    answers: [
      { label: "Absolute silence", creature: "fox" },
      { label: "Rain sounds and fake focus", creature: "owl" },
      { label: "Whatever keeps me awake", creature: "raccoon" },
      { label: "Soft indie playlist", creature: "cat" },
      { label: "The hum of other people existing", creature: "rabbit" },
    ],
  },
  {
    prompt: "What is the best time for you to come to the library to lock in?",
    answers: [
      { label: "Early morning, before the world starts talking", creature: "fox" },
      { label: "Late at night, when urgency becomes a personality trait", creature: "raccoon" },
      { label: "A quiet afternoon with enough time to settle in", creature: "owl" },
      { label: "Whenever I wander in and the mood feels right", creature: "cat" },
      { label: "Midday, when I’m bouncing between ideas and tabs", creature: "rabbit" },
    ],
  },
  {
    prompt: "Choose your dream library seat.",
    answers: [
      { label: "Window corner with a stack of books", creature: "owl" },
      { label: "Closest table to an outlet", creature: "raccoon" },
      { label: "A hidden quiet desk nobody noticed", creature: "fox" },
      { label: "At the Science Library, where ideas start to connect", creature: "rabbit" }
      { label: "A big table with room to spread everything out", creature: "cat" },
    ],
  },
  {
    prompt: "Be honest. Your academic energy is…",
    answers: [
      { label: "Focused", creature: "owl" },
      { label: "Feral", creature: "raccoon" },
      { label: "Controlled", creature: "fox" },
      { label: "Curious", creature: "cat" },
      { label: "Spiraling, but productively", creature: "rabbit" },
    ],
  },
  {
    prompt: "What feels most satisfying?",
    answers: [
      { label: "Finishing a chapter", creature: "owl" },
      { label: "Beating the clock", creature: "raccoon" },
      { label: "Finding the perfect quiet spot", creature: "fox" },
      { label: "Discovering an unexpected source", creature: "cat" },
      { label: "Connecting five ideas at once", creature: "rabbit" },
    ],
  },
  {
    prompt: "Choose your academic motto.",
    answers: [
      { label: "Leave me with my books", creature: "owl" },
      { label: "Somehow, we survive", creature: "raccoon" },
      { label: "Quiet is a strategy", creature: "fox" },
      { label: "Let me wander a little", creature: "cat" },
      { label: "One more source won’t hurt", creature: "rabbit" },
    ],
  },
];