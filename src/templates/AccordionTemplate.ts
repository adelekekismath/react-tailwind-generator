import { ComponentType } from "../utils/types";
import { AbstractComponentTemplate } from "./AbstractComponentTemplate";

export class AccordionTemplate extends AbstractComponentTemplate {

    getComponentType(): ComponentType {
        return "accordion";
    }

    generateComponent(name: string, className: string, isTypeScript: boolean): string {
        const defaultProps = this.getDefaultProps();
        const propsInterface = isTypeScript
            ? `
interface ${name}Props {
  items: { title: string, content: string }[];
}
`
            : "";

        const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

        return `import React, { useState } from "react";
${propsInterface}
export const ${name}${componentType} = ({ ${defaultProps} }) => {
    const [openIndex, setOpenIndex] = ${isTypeScript ? "useState<number | null>(null)": "useState(null)"} ;

    const handleToggle = (index ${isTypeScript ? ": number":""}) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white border border-gray-300 ${className}">
            {items.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                    <button
                        className="w-full text-left p-4 focus:outline-none"
                        onClick={() => handleToggle(index)}
                        aria-expanded={openIndex === index}
                        aria-controls={\`accordion-content-\${index}\`}
                    >
                        {item.title}
                    </button>
                    {openIndex === index && (
                        <div id={\`accordion-content-\${index}\`} className="p-4">
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
    `;
    }
}