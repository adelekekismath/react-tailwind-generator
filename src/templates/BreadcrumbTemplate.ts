import { ComponentType } from "../utils/types";
import { AbstractComponentTemplate } from "./AbstractComponentTemplate";

export class BreadcrumbTemplate extends AbstractComponentTemplate {

    getComponentType(): ComponentType {
        return "breadcrumb";
    }

    generateComponent(name: string, className: string, isTypeScript: boolean): string {
        const defaultProps = this.getDefaultProps();
        const propsInterface = isTypeScript
            ? `
interface ${name}Props {
  items: { label: string, href: string }[];
}
`
            : "";

        const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

        return `import React from "react";
${propsInterface}
export const ${name}${componentType} = ({${defaultProps}}) => {
    return (
        <nav className={\`flex space-x-2 text-blue-500 ${className}\`} aria-label="Breadcrumb">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <a href={item.href} className="hover:underline">
                        {item.label}
                    </a>
                    {index < items.length - 1 && <span>/</span>}
                </React.Fragment>
            ))}
        </nav>
    );
};
    `;
    }
}