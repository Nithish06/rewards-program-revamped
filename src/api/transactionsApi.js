export const fetchTransactions = async () => {
    const response = await fetch("/transactions.json");
  
    if (!response.ok) {
      throw new Error("Unable to fetch transactions");
    }
  
    return response.json();
  };
  