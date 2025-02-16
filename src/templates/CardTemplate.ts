import { IComponentTemplate } from "../IComponentTemplate";

export class CardTemplate implements IComponentTemplate {
  generate(name: string, className: string, props: string[] = []): string {
    const defaultProps = ["style = {}", "additionalClass = ''", "header = null", "footer = null"];
    const allProps = [...defaultProps, ...props].join(", ");

    return `
import React from "react";

export const ${name} = ({ children, ${allProps} }: ${name}Props) => {
  return (
    <div className={\`${className} p-4 shadow-md rounded-lg \${additionalClass}\`} style={style}>
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};
    `;
  }
}