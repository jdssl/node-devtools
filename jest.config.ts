import type { Config } from "jest";

import { resolve } from "path";

const root = resolve(__dirname);

const config: Config = {
    rootDir: root,
    clearMocks: true,
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
    moduleNameMapper: {
      '@/tests/(.*)': '<rootDir>/tests/$1',
      '@/(.*)': '<rootDir>/src/$1'
    },
    watchPathIgnorePatterns: ["globalConfig"],
};

export default config;
