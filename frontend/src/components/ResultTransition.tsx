import { motion } from "framer-motion";

export default function ResultTransition() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="result-transition-card"
    >
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
        className="result-transition-orb"
      />
      <p className="result-transition-kicker">Consulting your academic aura</p>
      <h3 className="result-transition-title">Revealing your creature…</h3>
      <p className="result-transition-text">A dramatic pause is only fair.</p>
    </motion.div>
  );
}