import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class DropdownTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "dropdown";
  }

  protected generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const defaultProps = this.getDefaultProps();
    const propsInterface = isTypeScript
      ? `
interface ${name}Props {
  options?: { value: string; label: string }[];
  placeholder?: string;
  onSelect?: (value: string) => void;
  className?: string;
}
`
      : "";

    const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

    return `import React, { useState } from "react";
${propsInterface}

export const ${name}${componentType} = ({ ${defaultProps} }) => {

    const dropdownClass = className || \`${className}\` ;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelect = (value${isTypeScript ? ": string" : ""}) => {
        setSelectedValue(value);
        onSelect(value);
        setIsOpen(false);
    };

    return (
        <div className={\`relative \${dropdownClass}\`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-2 border border-gray-300 rounded-lg flex justify-between items-center bg-white"
            >
                <span>{selectedValue || placeholder}</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            {isOpen && (
                <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(option.value)}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
    `;
  }
}