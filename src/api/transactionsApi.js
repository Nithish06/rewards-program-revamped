import { logger } from "../utils/logger";

export const fetchTransactions = async () => {
  logger.info("Fetching transactions from API");
  const response = await fetch("/transactions.json");

  if (!response.ok) {
    logger.error("API failed", { status: response.status });
    throw new Error("Unable to fetch transactions");
  }
  logger.info("Transactions fetched successfully");
  return response.json();
};
