import { ComponentType } from "../utils/types";
import { AbstractComponentTemplate } from "./AbstractComponentTemplate";

export class TableTemplate extends AbstractComponentTemplate {
  getComponentType(): ComponentType {
    return "table";
  }

  generateComponent(name: string, className: string, isTypeScript: boolean): string {
     
    const propsInterface = isTypeScript
      ? `
interface ${name}Props {
  data: Record<string, any>[];
}
`
      : "";

    const componentType = isTypeScript ? `: React.FC<${name}Props>` : "";

    return `import React from "react";
${propsInterface}
export const ${name}${componentType} = ({data = []}) => {

    const columns = data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <table className={\`min-w-full divide-y divide-gray-200 ${className}\`}>
            <thead className="bg-gray-50">
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column}
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column) => (
                            <td
                                key={column}
                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                            >
                                {row[column]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
`;
  }
}