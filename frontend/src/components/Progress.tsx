import { motion } from "framer-motion";

type ProgressProps = {
  current: number;
  total: number;
};

export default function Progress({ current, total }: ProgressProps) {
  const width = `${(current / total) * 100}%`;

  return (
    <div className="quiz-progress">
      <div className="quiz-progress-meta">
        <span>Library Creature Quiz</span>
        <span>
          {current} / {total}
        </span>
      </div>
      <div className="quiz-progress-track">
        <motion.div
          className="quiz-progress-fill"
          initial={{ width: 0 }}
          animate={{ width }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}