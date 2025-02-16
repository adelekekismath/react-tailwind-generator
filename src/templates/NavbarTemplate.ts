import { IComponentTemplate } from "../IComponentTemplate";

export class NavbarTemplate implements IComponentTemplate {
  generate(name: string, className: string, props: string[] = []): string {
    const defaultProps = ["style = {}", "additionalClass = ''", "leftSection = null", "rightSection = null"];
    const allProps = [...defaultProps, ...props].join(", ");

    return `
import React from "react";

export const ${name} = ({ children, ${allProps} }: ${name}Props) => {
  return (
    <nav className={\`${className} bg-gray-800 text-white p-4 \${additionalClass}\`} style={style}>
      <div className="container mx-auto flex justify-between items-center">
        {leftSection && <div className="navbar-left">{leftSection}</div>}
        <div className="navbar-center">{children}</div>
        {rightSection && <div className="navbar-right">{rightSection}</div>}
      </div>
    </nav>
  );
};
    `;
  }
}