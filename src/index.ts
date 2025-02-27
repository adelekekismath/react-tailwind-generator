#!/usr/bin/env node

import { program } from "commander";
import { setupGenerateCommand } from "./commands/generate";
import { setupInteractiveCommand } from "./commands/interactive";
import { ensureTailwindInstalled } from "./utils/tailwindVerification";

const setupCommands = () => {
    setupGenerateCommand(program);
    setupInteractiveCommand(program);

    program
        .option("-h, --help", "Display help for command")
        .action(() => {
            program.help();
        });
};

const main = async () => {
    try {
        await ensureTailwindInstalled();
        setupCommands();
        program.parse(process.argv);
    } catch (error) {
        console.error("❌ An error occurred:", error);
        process.exit(1);
    }
};

main();

export { program };