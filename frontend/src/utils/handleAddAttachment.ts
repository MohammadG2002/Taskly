import type { BoardCard } from "../types/BoardCard";

export const handleAddAttachment = (
  card: BoardCard,
  forceUpdate: () => void
) => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      card.attachments.push(fileUrl);
      forceUpdate();
    }
  };
  input.click();
};
