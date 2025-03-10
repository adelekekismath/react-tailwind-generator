import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class FormTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "form";
  }

  protected generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const propsInterface = isTypeScript
      ? 
`import React from "react";
import clsx from "clsx";

interface ${name}Props {
    children: React.ReactNode;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    className?: string;
}
`
      : `import React from "react";
import clsx from "clsx";`;

    return `${propsInterface}

export const ${name} = ({ 
    children, 
    onSubmit, 
    className = "" 
}: ${isTypeScript ? `${name}Props` : ""}) => {
    return (
        <form
            onSubmit={onSubmit}
            className={clsx("space-y-4", className)}
        >
            {children}
        </form>
    );
};`;
  }
}