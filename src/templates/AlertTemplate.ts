import { IComponentTemplate } from "../IComponentTemplate";

export class AlertTemplate implements IComponentTemplate {
  generate(name: string, className: string): string {
    const defaultProps = ["type = 'info'", "message = ''", "onClose = () => {}"].join(", ");

    return `
import React from "react";

export const ${name} = ({ ${defaultProps} }) => {
  const alertClass = \`${className} p-4 rounded-lg \${{
    info: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
  }[type]}\`;

  return (
    <div className={alertClass}>
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="text-lg font-bold">&times;</button>
      </div>
    </div>
  );
};
    `;
  }
}