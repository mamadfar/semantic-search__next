import {gemini} from "@/lib/openai";

export const vectorize = async (input: string) => {
    // Initialize the Gemini embedding model using the "embedding-001" model
    const embeddingModel = gemini.getGenerativeModel({ model: "embedding-001" });
    // Request the embedding for the provided input text
    const embeddingResponse = await embeddingModel.embedContent(input);
    // Return the embedding vector (an array of numbers)
    return embeddingResponse.embedding.values;
}