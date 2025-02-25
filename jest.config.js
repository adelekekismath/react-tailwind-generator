module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/src/__tests__/**/*.test.ts"],
    moduleFileExtensions: ["ts", "js"],
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    globals: {
        'ts-jest': {
            diagnostics: false
        }
    },
    setupFiles: ["<rootDir>/jest.setup.js"]
};