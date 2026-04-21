import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock3, Leaf, RotateCcw, Search, Share2 } from "lucide-react";
import { CREATURES, type CreatureKey } from "../data/creatures";
import ResultArt from "./ResultArt";

type ResultScreenProps = {
  creatureKey: CreatureKey;
  onRestart: () => void;
};

// Match the base URL used in LibraryCreatureQuiz.tsx
const API_BASE = "http://localhost:8000";

export default function ResultScreen({ creatureKey, onRestart }: ResultScreenProps) {
  const creature = CREATURES[creatureKey];
  const [c1, c2] = creature.colors;
  const [isSharing, setIsSharing] = useState(false);

  const chips = useMemo(
    () => [
      { icon: BookOpen, label: creature.resources[0] },
      { icon: Search, label: creature.resources[1] },
      { icon: Clock3, label: creature.resources[2] },
    ],
    [creature]
  );

  const handleShare = async () => {
    setIsSharing(true);
    try {
      // Fetch the pre-generated story image from FastAPI
      const res = await fetch(`${API_BASE}/quiz-attempts/story/${creatureKey}`);
      if (!res.ok) throw new Error("Failed to fetch story image");
      
      const blob = await res.blob();
      const file = new File([blob], `${creature.name}-library-creature.png`, {
        type: "image/png",
      });

      // Try native share sheet (mobile)
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: `I'm a ${creature.name}!`,
          text: `${creature.title} — find out your library creature!`,
        });
      } else {
        // Desktop fallback: download the PNG
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      // AbortError = user cancelled the share sheet, that's fine
      if ((err as Error).name !== "AbortError") {
        console.error("Share failed:", err);
      }
    } finally {
      setIsSharing(false);
    }
  };

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
            <p className="result-info-heading">You'd probably love</p>
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

          <div className="result-button-row">
            <button
              className="result-share-button"
              onClick={handleShare}
              disabled={isSharing}
            >
              <Share2 size={16} />
              <span>{isSharing ? "Preparing..." : "Share result"}</span>
            </button>

            <button className="result-restart-button" onClick={onRestart}>
              <RotateCcw size={16} />
              <span>Take the quiz again</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}