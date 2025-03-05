import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class CardTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "card";
  }

  protected generateComponent(name: string, className:  string, isTypeScript: boolean): string {
    const propsInterface = isTypeScript
      ? `
interface ${name}Props {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    title?: string;
    content: React.ReactNode;
    className?: string;
}
`
      : "";

    const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

    return `import React from "react";
${propsInterface}
export const ${name}${componentType} = ({ 
    header = 'Default Header',
    footer = 'Default Footer',
    title = 'Default Title', 
    content = 'Default Content', 
    className : propClassName = '', 
}) => {

    const defaultClassName = propClassName;
    const classes = "${className}" || defaultClassName;

    return (
        <div className={classes}>
            {header && (
                <div className="text-lg font-semibold text-gray-700 mb-4">
                    {header}
                </div>
            )}

            {title && (
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    {title}
                </h1>
            )}

            <div className="text-gray-600 mb-4">
                {content}
            </div>

            {footer && (
                <div className="border-t border-gray-200 pt-4 text-sm text-gray-500">
                    {footer}
                </div>
            )}
        </div>
    );
};
`;
  }
}