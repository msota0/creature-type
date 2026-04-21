import { useMemo } from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock3, Leaf, RotateCcw, Search } from "lucide-react";
import { CREATURES, type CreatureKey } from "../data/creatures";
import ResultArt from "./ResultArt";

type ResultScreenProps = {
  creatureKey: CreatureKey;
  onRestart: () => void;
};

export default function ResultScreen({ creatureKey, onRestart }: ResultScreenProps) {
  const creature = CREATURES[creatureKey];
  const [c1, c2] = creature.colors;

  const chips = useMemo(
    () => [
      { icon: BookOpen, label: creature.resources[0] },
      { icon: Search, label: creature.resources[1] },
      { icon: Clock3, label: creature.resources[2] },
    ],
    [creature]
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="result-shell"
    >
      <div
        className="result-card"
        style={{
          background: `radial-gradient(circle at 20% 15%, ${c1}40, transparent 28%), radial-gradient(circle at 80% 10%, ${c2}30, transparent 24%), linear-gradient(135deg, #130f22 0%, #1b1430 55%, #130f22 100%)`,
        }}
      >
        <div className="result-art-panel">
          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="result-art-frame"
          >
            <ResultArt creature={creature.art} />
          </motion.div>
        </div>

        <div className="result-copy">
          <div className="result-badge">
            <Leaf size={14} />
            <span>{creature.badge}</span>
          </div>

          <p className="result-label">Your library creature is</p>
          <h2 className="result-name">{creature.name}</h2>
          <p className="result-title">{creature.title}</p>
          <p className="result-blurb">{creature.blurb}</p>

          <div className="result-info-grid">
            <div className="result-info-card">
              <p className="result-info-heading">Ideal study zone</p>
              <p>{creature.zone}</p>
            </div>
            <div className="result-info-card">
              <p className="result-info-heading">Academic superpower</p>
              <p>{creature.power}</p>
            </div>
          </div>

          <div className="result-resources">
            <p className="result-info-heading">You’d probably love</p>
            <div className="result-chip-list">
              {chips.map((chip) => {
                const Icon = chip.icon;
                return (
                  <div key={chip.label} className="result-chip">
                    <Icon size={16} />
                    <span>{chip.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <button className="result-restart-button" onClick={onRestart}>
            <RotateCcw size={16} />
            <span>Take the quiz again</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}