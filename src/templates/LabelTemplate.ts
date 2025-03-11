import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class LabelTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "label";
  }

  protected generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const propsInterface = isTypeScript
      ? 
`import React from "react";
import clsx from "clsx";

interface ${name}Props {
    children: React.ReactNode;
    htmlFor?: string;
    className?: string;
}
`
      : `import React from "react";
import clsx from "clsx";`;

    return `${propsInterface}

export const ${name} = ({ 
    children, 
    htmlFor, 
    className = "" 
} ${isTypeScript ? `: ${name}Props` : ""}) => {
    return (
        <label
            htmlFor={htmlFor}
            className={clsx("block text-sm font-medium text-gray-700", className)}
        >
            {children}
        </label>
    );
};`;
  }
}