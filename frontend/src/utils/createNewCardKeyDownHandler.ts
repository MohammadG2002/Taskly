import type { BoardColumn } from "../types/BoardColumn";
import type { BoardCard } from "../types/BoardCard";
import handleCardNew from "./handleCardNew";

interface Params {
  column: BoardColumn;
  bag: {
    addCard: (card: BoardCard, options?: { on: "top" | "bottom" }) => void;
  };
  setNewCard: React.Dispatch<React.SetStateAction<boolean>>;
  reporter?: BoardCard["reporter"];
}

const createNewCardKeyDownHandler = ({
  column,
  bag,
  setNewCard,
  reporter,
}: Params) => {
  return (e: React.KeyboardEvent<HTMLInputElement>) => {
    handleCardNew({ e, column, bag, setNewCard, reporter });
  };
};

export default createNewCardKeyDownHandler;
