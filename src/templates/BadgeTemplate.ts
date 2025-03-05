import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class BadgeTemplate extends AbstractComponentTemplate {

  protected getComponentType(): ComponentType {
    return "badge";
  }

  generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const propsInterface = isTypeScript
      ? `
interface ${name}Props {
  text?: string;
  color?: 'blue' | 'green' | 'red' | 'yellow';
  onClick?: () => void;
  className?: string;
}
`
      : "";

    
return `import React from "react";
${propsInterface}
export const ${name}${isTypeScript ? `: React.FC<${name}Props>` : ""} = ({ 
    text = 'Badge Text',
    color = 'blue',
    onClick = () => {}
}) => {

    const colorClass = {
        blue: "bg-blue-100 text-blue-800",
        green: "bg-green-100 text-green-800",
        red: "bg-red-100 text-red-800",
        yellow: "bg-yellow-100 text-yellow-800",
        pink: "bg-pink-100 text-pink-800",
        indigo: "bg-indigo-100 text-indigo-800",
        purple: "bg-purple-100 text-purple-800",
        gray: "bg-gray-100 text-gray-800"
    }[color];

    return (
        <span
            onClick={onClick}
            className={\`${className} text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm  \${colorClass}\`}
        >
        {text}
        </span>
    );
};
    `;
  }
}