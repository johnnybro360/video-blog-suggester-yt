import { ollama } from "ai-sdk-ollama";

export function getEmbeddingModel() {
  return ollama.embeddingModel("nomic-embed-text");
}
