import { DEFAULT_PROPS } from "../utils/constants";
import { ComponentType } from "../utils/types";

export abstract class AbstractComponentTemplate {
    /**
   * Generate a React component.
   * @param name - Component name.
   * @param className - TailwindCSS class name.
   * @returns The component source code.
   */
   generate(name: string, className: string): string {
    return this.generateComponent(name, className, false);
  }

  protected abstract getComponentType(): ComponentType;


  protected getDefaultProps(): string {
    return DEFAULT_PROPS[this.getComponentType()].join(", ");
  }

  /**
   * Génère un composant React en TypeScript.
   * @param name - Component name.
   * @param className - TailwindCSS class name.
   * @returns The component source code.
   */
   generateTs(name: string, className: string): string {
    return this.generateComponent(name, className, true);
  }

    /**
     * Generate the component code.
     * @param name - Component name.
     * @param className - TailwindCSS class name.
     * @param isTypeScript - If true, generates TypeScript code.
     * @returns The component source code.
     */
    protected abstract  generateComponent(name: string, className: string, isTypeScript: boolean): string ;

  }