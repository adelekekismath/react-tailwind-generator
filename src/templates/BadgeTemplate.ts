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
export const ${name}${isTypeScript ? `: React.FC<${name}Props>` : ""} = ({ ${this.getDefaultProps()} }) => {
  const colorClass = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
  }[color];

  return (
    <span
      onClick={onClick}
      className={\`${className} \${colorClass}\`}
    >
      {text}
    </span>
  );
};
    `;
  }
}