import { IComponentTemplate } from "../IComponentTemplate";

export class CardTemplate implements IComponentTemplate {
  generate(name: string, className: string): string {
    const defaultProps = ["style = {}", "header = null", "footer = null"].join(", ");

    return `
import React from "react";

export const ${name} = ({ children, ${defaultProps} }) => {
  return (
    <div className={"${className}"} style={style}>
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};
    `;
  }
}