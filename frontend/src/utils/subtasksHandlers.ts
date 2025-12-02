import type { Subtask } from "./getInitialSubtasks";

export function toggleSubtask(items: Subtask[], id: number): Subtask[] {
  return items.map((s) =>
    s.id === id ? { ...s, checked: !s.checked } : s
  );
}

export function addSubtaskItem(items: Subtask[], text: string): Subtask[] {
  if (!text.trim()) return items;

  const nextId = items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1;

  const newSub: Subtask = {
    id: nextId,
    text: text.trim(),
    checked: false,
  };

  return [...items, newSub];
}
