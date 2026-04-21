import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Progress from "./components/Progress";
import QuizCard from "./components/QuizCard";
import QuizHeader from "./components/QuizHeader";
import ResultScreen from "./components/ResultScreen";
import ResultTransition from "./components/ResultTransition";
import { QUESTIONS } from "./data/questions";
import type { CreatureKey } from "./data/creatures";
import { computeResult } from "./utils/quiz";
import "./styles/library-creature-quiz.css";

type Phase = "quiz" | "reveal" | "result";

function getOrCreateSessionId(): string {
  const existing = localStorage.getItem("library_session_id");

  if (existing) return existing;

  const newId = crypto.randomUUID();
  localStorage.setItem("library_session_id", newId);
  return newId;
}

export default function LibraryCreatureQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<CreatureKey[]>([]);
  const [phase, setPhase] = useState<Phase>("quiz");
  const [startTime] = useState(() => performance.now());

  const total = QUESTIONS.length;

  const handleSelect = (creature: CreatureKey) => {
    const nextAnswers = [...answers, creature];
    setAnswers(nextAnswers);

    if (step === total - 1) {
      const resultCreature = computeResult(nextAnswers);
      const sessionId = getOrCreateSessionId();
      const completionTimeSeconds = Math.floor(
        (performance.now() - startTime) / 1000
      );

      const payload = {
        quiz_name: "library_creature_quiz",
        session_id: sessionId,
        result_creature: resultCreature,
        completion_time_seconds: completionTimeSeconds,
        answers: nextAnswers.map((selectedCreature, index) => {
          const question = QUESTIONS[index];
          const selectedAnswer = question.answers.find(
            (answer) => answer.creature === selectedCreature
          );

          return {
            question_index: index,
            question_prompt: question.prompt,
            selected_option: selectedAnswer?.label ?? "",
            selected_creature: selectedCreature,
          };
        }),
      };

      fetch("http://localhost:8000/quiz-attempts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }).catch((error) => {
        console.error("Failed to save quiz attempt:", error);
      });

      setPhase("reveal");
      setTimeout(() => {
        setPhase("result");
      }, 1700);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers([]);
    setPhase("quiz");
  };

  const resultKey = useMemo(
    () => (answers.length ? computeResult(answers) : "owl"),
    [answers]
  );

  return (
    <div className="quiz-page">
      <div className="quiz-bg-glow quiz-bg-glow-top" />
      <div className="quiz-bg-glow quiz-bg-glow-right" />
      <div className="quiz-bg-grid" />

      <main className="quiz-main">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="quiz-shell"
        >
          <QuizHeader />

          {phase === "quiz" && <Progress current={step + 1} total={total} />}

          <div className="quiz-stage">
            <AnimatePresence mode="wait">
              {phase === "quiz" && (
                <QuizCard
                  key={step}
                  question={QUESTIONS[step]}
                  onSelect={handleSelect}
                  index={step}
                />
              )}

              {phase === "reveal" && <ResultTransition key="reveal" />}

              {phase === "result" && (
                <ResultScreen
                  key={resultKey}
                  creatureKey={resultKey}
                  onRestart={handleRestart}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </main>
    </div>
  );
}