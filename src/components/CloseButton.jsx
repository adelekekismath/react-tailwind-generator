
import React from "react";

export const CloseButton = ({ children, onClick, icon, closed }) => {
  return (
    <button className="mt-4 p-3" onClick={onClick}>
      {children}
      {icon && <span>{icon}</span>}
{closed && <span>{closed}</span>}
    </button>
  );
};
    