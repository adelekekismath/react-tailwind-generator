import { execSync } from "child_process";
import inquirer from "inquirer";
import fs from "fs";
import path from "path";

function isTailwindInstalled(): boolean {
    try {
        const packageJsonPath = path.join(process.cwd(), "package.json");
        if (!fs.existsSync(packageJsonPath)) return false;

        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
        return packageJson.dependencies?.["tailwindcss"] || packageJson.devDependencies?.["tailwindcss"];
    } catch (error) {
        return false;
    }
}

function isTailwindCDNIncluded(): boolean {
    try {
        const indexPath = path.join(process.cwd(), "index.html");
        if (!fs.existsSync(indexPath)) return false;

        const indexContent = fs.readFileSync(indexPath, "utf-8");
        return indexContent.includes("https://cdn.jsdelivr.net/npm/tailwindcss@");
    } catch (error) {
        return false;
    }
}

async function ensureTailwindInstalled() {
    if (!isTailwindInstalled() && !isTailwindCDNIncluded()) {
        const { install } = await inquirer.prompt([
            {
                type: "confirm",
                name: "install",
                message: "Tailwind CSS is not installed in this project. Do you want to install it now?",
                default: true,
            },
        ]);

        if (install) {
            console.log("\n"+ "📦 Installing Tailwind CSS...");

            execSync("npm install -D tailwindcss @tailwindcss/vite", { stdio: "inherit" });

            configureTailwindForVite();

            console.log("\n"+"✅ Tailwind CSS has been installed and configured for Vite!");
        } else {
            console.log("\n"+"⚠️ Tailwind CSS is not installed. Some components may not work correctly.");
        }
    }
}

function configureTailwindForVite() {
    const viteConfigPath = path.join(process.cwd(), "vite.config.ts");
    const tailwindConfigPath = path.join(process.cwd(), "tailwind.config.js");
    const postcssConfigPath = path.join(process.cwd(), "postcss.config.js");
    const srcCssPath = path.join(process.cwd(), "src", "styles.css");

    if (!fs.existsSync(viteConfigPath)) {
        fs.writeFileSync(
            viteConfigPath,
`import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})`
        );
    }


    if (!fs.existsSync(tailwindConfigPath)) {
        fs.writeFileSync(
            tailwindConfigPath,
`module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`
        );
    }


    if (!fs.existsSync(postcssConfigPath)) {
        fs.writeFileSync(
            postcssConfigPath,
`module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`
        );
    }

    
    if (!fs.existsSync(srcCssPath)) {
        fs.mkdirSync(path.dirname(srcCssPath), { recursive: true });
        fs.writeFileSync(
            srcCssPath,
            `@import "tailwindcss";`
        );
    }

    console.log("\n"+"🎉 Tailwind CSS has been configured for Vite!");
}

export { ensureTailwindInstalled };