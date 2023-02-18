import type { Config } from "jest";

import { resolve } from "path";

const root = resolve(__dirname);

const config: Config = {
    rootDir: root,
    collectCoverageFrom: ["<rootDir>/src/**/*.ts", "!<rootDir>/**/tests/**"],
    coverageDirectory: "coverage",
    coverageProvider: "babel",
    testEnvironment: "node",
    preset: "ts-jest",
    transform: {
        ".+\\.ts$": "ts-jest",
    },
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    watchPathIgnorePatterns: ["globalConfig"],
};

export default config;
