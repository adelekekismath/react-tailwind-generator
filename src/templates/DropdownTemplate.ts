import { AbstractComponentTemplate } from "./AbstractComponentTemplate";
import { ComponentType } from "../utils/types";

export class DropdownTemplate extends AbstractComponentTemplate {
  protected getComponentType(): ComponentType {
    return "dropdown";
  }

  protected generateComponent(name: string, className: string, isTypeScript: boolean): string {
    const propsInterface = isTypeScript
      ? `
interface ${name}Props {
  options?: { value: string; label: string; icon?: React.ReactNode }[];
  placeholder?: string;
  onSelect?: (value: string | string[]) => void;
  className?: string;
  searchable?: boolean;
  multiSelect?: boolean;
}
`
      : "";

    const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

    return `import React, { useState } from "react";
${propsInterface}

export const ${name}${componentType} = ({
    options = [],
    placeholder = "Select an option",
    onSelect = () => {},
    className: propClassName = "",
    searchable = false,
    multiSelect = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(multiSelect ? [] : "");
    const [searchQuery, setSearchQuery] = useState("");
    const classes = "${className}".trim() || propClassName;

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSelect = (value${isTypeScript ? ": string" : ""}) => {
        if (multiSelect) {
            const newValues = selectedValue.includes(value)
                ? selectedValue.filter((v) => v !== value)
                : [...selectedValue, value];
            setSelectedValue(newValues);
            onSelect(newValues);
        } else {
            setSelectedValue(value);
            onSelect(value);
            setIsOpen(false);
        }
    };

    return (
        <div className={\`relative \${classes}\`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-3 border border-gray-300 rounded-lg flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span>
                    {multiSelect
                        ? selectedValue.length > 0
                        ? selectedValue.join(", ")
                        : placeholder
                        : selectedValue || placeholder}
                </span>
                <svg
                    className={\`w-4 h-4 ml-2 transform transition-transform duration-200 \${isOpen ? "rotate-180" : ""}\`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {searchable && (
                        <div className="p-2 border-b border-gray-200">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        </div>
                    )}

                <div className="max-h-60 overflow-y-auto">
                    {filteredOptions.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(option.value)}
                            className={\`p-3 hover:bg-gray-100 cursor-pointer flex items-center \${multiSelect && selectedValue.includes(option.value) ? "bg-blue-50" : ""}\`}
                            role="option"
                            aria-selected={selectedValue.includes(option.value)}
                        >
                            {option.icon && (
                                <span className="mr-2 text-gray-500">{option.icon}</span>
                            )}
                            <span>{option.label}</span>
                            {multiSelect && selectedValue.includes(option.value) && (
                                <svg
                                    className="w-4 h-4 ml-auto text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            )}
                        </div>
                    ))}
                </div>
                </div>
            )}
        </div>
    );
};
    `;
  }
}