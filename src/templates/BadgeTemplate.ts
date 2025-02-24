import { IComponentTemplate } from "../IComponentTemplate";

export class BadgeTemplate implements IComponentTemplate {
  generate(name: string, className: string, props: string[] = []): string {
    const defaultProps = ["text = ''", "color = 'blue'", "onClick = () => {}"];
    const allProps = [...defaultProps, ...props].join(", ");

    return `
import React from "react";

export const ${name} = ({ text, color, onClick, ${allProps} }) => {
  const colorClass = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
  }[color];

  return (
    <span
      onClick={onClick}
      className={\`${className} px-2 py-1 rounded-full text-sm \${colorClass}\`}
    >
      {text}
    </span>
  );
};
    `;
  }
}