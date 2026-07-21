import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10_000,
});

export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message ?? "Une erreur est survenue. Veuillez réessayer.";
  }
  if (error instanceof Error) return error.message;
  return "Une erreur est survenue. Veuillez réessayer.";
}
