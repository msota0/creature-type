import type { CreatureKey } from "../data/creatures";

export function computeResult(answers: CreatureKey[]): CreatureKey {
  const scores: Record<CreatureKey, number> = {
    owl: 0,
    raccoon: 0,
    fox: 0,
    cat: 0,
    rabbit: 0,
  };

  answers.forEach((creature) => {
    scores[creature] += 1;
  });

  const ranking = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return ranking[0][0] as CreatureKey;
}