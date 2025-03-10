import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class SelectTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "select";
  }

  protected generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const propsInterface = isTypeScript
      ? `
import React, { forwardRef } from "react";
import clsx from "clsx";

interface ${name}Props {
    options: { value: string; label: string }[];
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
}
`
      : `import React, { forwardRef } from "react";
import clsx from "clsx";`;

    return `${propsInterface}

export const ${name} = ${isTypeScript ? `forwardRef<HTMLSelectElement, ${name}Props>` : "forwardRef"}(({ 
    options, 
    value, 
    onChange, 
    className = "" 
}, ref
) => {
    return (
        <select
            ref={ref}
            className={clsx("px-3 py-2 border rounded focus:outline-none focus:ring", className)}
            value={value}
            onChange={onChange}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
  }
);
    `;
  }
}