export default {
    testEnvironment: "node", // Ensures Node.js-like environment
    transform: {}, // Disable Jest’s built-in transformation (we use native ESM)
    extensionsToTreatAsEsm: [".ts"], // Treat TypeScript & JavaScript as ESM
    moduleNameMapper: {
      "^(\\.{1,2}/.*)\\.js$": "$1" // Fixes import path issues in Jest
    }
  };
  