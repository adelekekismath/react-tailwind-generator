import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class NavbarTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "navbar";
  }

  protected generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const defaultProps = this.getDefaultProps();
    const propsInterface = isTypeScript
      ? `
interface ${name}Props {
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
    logo?: React.ReactNode;
    links: { label: string; href: string }[];
}
`
      : "";

    const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

return `import React from "react";
${propsInterface}
export const ${name}${componentType} = ({ ${defaultProps} }) => {
  return (
    <nav className="${className}">
        <div className="container mx-auto flex justify-between items-center">
            {logo && <div className="navbar-logo">{logo}</div>}
            {leftSection && <div className="navbar-left">{leftSection}</div>}
            <div className="navbar-links flex space-x-4">
                {links.map((link, index) => (
                    <a key={index} href={link.href} className="navbar-link">
                    {link.label}
                    </a>
                ))}
            </div>
            {rightSection && <div className="navbar-right">{rightSection}</div>}
        </div>
    </nav>
  );
};
    `;
  }
}