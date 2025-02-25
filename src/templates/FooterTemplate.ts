import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class FooterTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "footer";
  }

  protected generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const defaultProps = this.getDefaultProps();
    const propsInterface = isTypeScript
      ? `
interface ${name}Props {
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
    centerSection?: React.ReactNode;
    links?: { href: string; text: string }[];
    children?: React.ReactNode;
}
`
      : "";

    const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

return `import React from "react";
${propsInterface}
export const ${name}${componentType} = ({  ${defaultProps} }) => {
    return (
        <footer className="${className}">
            <div className="container mx-auto flex justify-between items-center">
                {leftSection && <div className="footer-left">{leftSection}</div>}
                {centerSection && <div className="footer-center">{centerSection}</div>}
                {rightSection && <div className="footer-right">{rightSection}</div>}
            </div>
            {links.length > 0 && (
                <div className="footer-links mt-4 flex justify-center gap-4">
                {links.map((link, index) => (
                    <a key={index} href={link.href} className="text-white hover:text-gray-400">
                    {link.text}
                    </a>
                ))}
                </div>
            )}
        </footer>
    );
};
    `;
  }
}