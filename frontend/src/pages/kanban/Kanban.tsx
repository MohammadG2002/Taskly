import React, { useState } from "react";
import { Kanban as KanbanKit } from "react-kanban-kit";
import "./Kanban.css";
import SwitchBox from "../../components/SwitchBox/SwitchBox";

interface CardContent {
  description?: string;
  priority?: string;
}

const KanbanPage: React.FC = () => {
  const [isFixedColumn, setIsFixedColumn] = useState(false);

  const dataSource: any = {
    root: {
      id: "root",
      title: "Root",
      children: ["col-1", "col-2", "col-3"],
      totalChildrenCount: 3,
      parentId: null,
    },
    "col-1": {
      id: "col-1",
      title: "To Do",
      children: ["task-1", "task-2"],
      totalChildrenCount: 2,
      parentId: "root",
    },
    "col-2": {
      id: "col-2",
      title: "In Progress",
      children: ["task-3"],
      totalChildrenCount: 1,
      parentId: "root",
    },
    "col-3": {
      id: "col-3",
      title: "Done",
      children: ["task-4"],
      totalChildrenCount: 1,
      parentId: "root",
    },
    "task-1": {
      id: "task-1",
      title: "Design Homepage",
      parentId: "col-1",
      children: [],
      totalChildrenCount: 0,
      type: "card",
      content: {
        description: "Create wireframes and mockups for the homepage",
        priority: "high",
      },
    },
    "task-2": {
      id: "task-2",
      title: "Setup Database",
      parentId: "col-1",
      children: [],
      totalChildrenCount: 0,
      type: "card",
    },
    "task-3": {
      id: "task-3",
      title: "Implement Auth",
      parentId: "col-2",
      children: [],
      totalChildrenCount: 0,
      type: "card",
    },
    "task-4": {
      id: "task-4",
      title: "Deploy App",
      parentId: "col-3",
      children: [],
      totalChildrenCount: 0,
      type: "card",
    },
  };

  const configMap: any = {
    card: {
      render: ({ data }: any) => (
        <div className="kanban-card">
          <h3>{data.title}</h3>
          {data.content?.description && <p>{data.content.description}</p>}
          {data.content?.priority && (
            <span className={`priority ${data.content.priority}`}>
              {data.content.priority}
            </span>
          )}
        </div>
      ),
      isDraggable: true,
    },
  };

  return (
    <div className="kanban-page">
      <header className="kanban-header">
        <h1 className="kanban-title">Kanban</h1>
        <div className="kanban-toggle">
          <span className="kanban-toggle-label">Fixed Column</span>
          <SwitchBox isOn={isFixedColumn} onToggle={setIsFixedColumn} />
        </div>
      </header>

      {isFixedColumn ? <p>Fixed Column is ON</p> : <p>Fixed Column is OFF</p>}

      <KanbanKit
        dataSource={dataSource}
        configMap={configMap}
        onCardMove={(move: any) => console.log("Card moved:", move)}
        onColumnMove={(move: any) => console.log("Column moved:", move)}
      />
    </div>
  );
};

export default KanbanPage;
