"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
const client_1 = require("@sanity/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.client = (0, client_1.createClient)({
    projectId: "ft3wkk5q", // Replace with your project ID
    dataset: 'development',        // Or your dataset name
    apiVersion: '2025-01-20',     // Today's date or latest API version
    useCdn: true,                // Disable CDN for real-time updates
    token: "skv4pUYc8VGOLgJqwapFIQ90fOY6nl0CKuKogJgn1WeuKQWQGhdak1R0q8JdU8kPzHTY2dd5AwAc9R9c6kddfHBu96739VpUL0zH2ag6iWhxu5NC6xL1V4vVcAEiw5qe0ZUZDiTzxGv290M4E1vYNvjVl8AU8y4X0prp9zlNxgH0IZcFht1V",
  });