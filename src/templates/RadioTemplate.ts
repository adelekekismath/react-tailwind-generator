import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class RadioTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "radio";
  }

  protected generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const propsInterface = isTypeScript
      ? 
`import React, { forwardRef } from "react";
import clsx from "clsx";

interface ${name}Props {
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}
`
      : `import React, { forwardRef } from "react";
import clsx from "clsx";`;

    return `${propsInterface}

export const ${name} = ${isTypeScript ? `forwardRef<HTMLInputElement, ${name}Props>` : "forwardRef"}(({ 
    checked, 
    onChange, 
    className = "" 
}, ref
) => {
    return (
        <input
            ref={ref}
            type="radio"
            className={clsx("form-radio h-5 w-5 text-blue-600", className)}
            checked={checked}
            onChange={onChange}
        />
    );
  }
);`;
  }
}