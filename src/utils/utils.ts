export const generatePropsUsage = (props: string[]) => {
    if (props.length === 0) return "";
    return props.map((prop) => `{${prop} && <span>{${prop}}</span>}`).join("\n");
  };