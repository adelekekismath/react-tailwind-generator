import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class CardTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "card";
  }

  protected generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const defaultProps = this.getDefaultProps();
    const propsInterface = isTypeScript
      ? `
interface ${name}Props {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    title: string;
    content: React.ReactNode;
    className?: string;
}
`
      : "";

    const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

    
return `import React from "react";
${propsInterface}
export const ${name}${componentType} = ({ ${defaultProps} }) => {
    const cardClass = className || \`${className}\` ;
    return (
        <div className={cardClass}>
            <h1 className="text-2xl font-bold">{title}</h1>
            {header && <div className="card-header">{header}</div>}
            <div className="card-body">{content}</div>
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
};
    `;
  }
}