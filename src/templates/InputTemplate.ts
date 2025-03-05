import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class InputTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "input";
  }

  protected generateComponent(name: string, className: string, isTypeScript: boolean): string {
     
    
    const propsInterface = isTypeScript
      ? `
import React, { forwardRef } from "react";
import clsx from "clsx";

type InputType = "text" | "email" | "password" | "number" | "tel" | "search";

interface ${name}Props {
    placeholder?: string;
    type?: InputType;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    className?: string;
}
`
      : `import React, { forwardRef } from "react";
import clsx from "clsx";`;

    return `${propsInterface}

export const ${name} = ${isTypeScript ? `forwardRef<HTMLInputElement, ${name}Props>` : "forwardRef"}(({ 
    placeholder = "", 
    type = "text", 
    value, 
    onChange, 
    onBlur, 
    className = "" 
}, ref
) => {
    return (
        <input
            ref={ref}
            className={clsx("px-3 py-2 border rounded focus:outline-none focus:ring", className)}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
  }
);
    `;
  }
}
