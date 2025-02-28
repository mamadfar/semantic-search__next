import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";

dotenv.config();

export const gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Optionally, get a specific model (e.g., "gemini-1.5-flash")
export const model = gemini.getGenerativeModel({ model: "gemini-1.5-flash" });