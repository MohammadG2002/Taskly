import React from "react";
import "./WorkspaceItem.css";

interface WorkspaceItemProps {
  workspace: {
    id: string;
    logo: string;
    alt: string;
    name: string;
    access: string;
  };
  setCurrentWorkspace: (workspace: WorkspaceItemProps["workspace"]) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const WorkspaceItem = ({
  workspace,
  setCurrentWorkspace,
  setIsOpen,
}: WorkspaceItemProps) => {
  return (
    <div
      key={workspace.id}
      className="workspace-option"
      onClick={(e) => {
        e.stopPropagation();
        setCurrentWorkspace(workspace);
        setIsOpen(false);
      }}
    >
      <img
        src={workspace.logo}
        alt={workspace.alt}
        className="workspace-logo"
      />
      <h2 className="workspace-name">{workspace.name}</h2>
      <span className="workspace-access">{workspace.access}</span>
    </div>
  );
};

export default WorkspaceItem;
