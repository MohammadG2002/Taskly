import type { Subtask } from "./getInitialSubtasks";

export function getSubtasksProgress(items: Subtask[]) {
  const completed = items.filter((s) => s.checked).length;
  const total = items.length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return { completed, total, percent };
}
