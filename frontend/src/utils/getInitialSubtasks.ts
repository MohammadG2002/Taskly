import subtasksJson from "../mocks/subtasks.json";

export type Subtask = {
  id: number;
  text: string;
  checked: boolean;
};

export function getInitialSubtasks(
  selectedCardId: number | undefined,
  cardSubtaskIds: number[] | undefined
): Subtask[] {
  const cardKey = String(selectedCardId ?? "");
  const data = subtasksJson as Record<string, Subtask[]>;

  if (Array.isArray(cardSubtaskIds) && cardSubtaskIds.length > 0) {
    const result: Subtask[] = [];
    for (const id of cardSubtaskIds) {
      for (const key in data) {
        const found = data[key].find((s) => s.id === id);
        if (found) {
          result.push(found);
          break;
        }
      }
    }
    return result;
  }

  const byKey = data[cardKey];
  return Array.isArray(byKey) ? byKey : [];
}
