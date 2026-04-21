import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import type { QuizQuestion } from "../data/questions";
import type { CreatureKey } from "../data/creatures";

type QuizCardProps = {
  question: QuizQuestion;
  onSelect: (creature: CreatureKey) => void;
  index: number;
};

export default function QuizCard({ question, onSelect, index }: QuizCardProps) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 26, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -18, scale: 0.985 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="quiz-card"
    >
      <div className="quiz-card-badge">
        <Sparkles size={14} />
        <span>Be honest</span>
      </div>

      <h2 className="quiz-card-title">{question.prompt}</h2>

      <div className="quiz-answer-list">
        {question.answers.map((answer, idx) => (
          <motion.button
            key={answer.label}
            onClick={() => onSelect(answer.creature)}
            whileHover={{ scale: 1.015, x: 6 }}
            whileTap={{ scale: 0.985 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04 }}
            className="quiz-answer-button"
          >
            <span>{answer.label}</span>
            <ChevronRight size={18} />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}