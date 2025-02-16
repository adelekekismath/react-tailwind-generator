export interface IComponentTemplate {
    generate(name: string, className: string, props?: string[]): string;
  }