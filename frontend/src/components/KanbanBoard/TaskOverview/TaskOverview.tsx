import React from "react";
import "./TaskOverview.css";
import type { BoardCard } from "../../../types/BoardCard";
import CardTitle from "./CardTitle/CardTitle";

interface TaskOverviewProps {
  selectedCard: BoardCard;
}

const TaskOverview = ({ selectedCard }: TaskOverviewProps) => {
  return (
    <div>
      <CardTitle selectedCard={selectedCard} />
    </div>
  );
};

export default TaskOverview;
