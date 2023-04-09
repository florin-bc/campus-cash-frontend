// @ts-ignore
import { BACKEND_URL } from "@env";

export const fetchMyTransactions = async (myId: number) => {
  try {
    const result = await fetch(`${BACKEND_URL}/transaction/${myId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resultJSON = await result.json();
    if (!resultJSON?.length || resultJSON?.length === 0) {
      return [];
    }
    const tempArray = [];
    for (const result1 of resultJSON) {
      const paymentType = await fetch(
        `${BACKEND_URL}/payment-type/${result1?.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const processed = await paymentType?.json();
      if (processed) {
        tempArray?.push({
          ...result1,
          paymentType: processed?.type,
          cashBack: processed?.cashback,
        });
      }
    }
    return tempArray;
  } catch (err) {
    console.log("[API]", "fetchMyTransactions error:", err);
  }
};

export const fetchMyLoans = async (myId: number) => {
  try {
    const result = await fetch(`${BACKEND_URL}/loan/mine`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ myId }),
    });
    const resultJSON = await result.json();
    if (!resultJSON?.length || resultJSON?.length === 0) {
      return [];
    }
    return resultJSON;
  } catch (err) {
    console.log("[API]", "fetchMyLoans error:", err);
  }
};

export const fetchAllLoans = async () => {
  try {
    const result = await fetch(`${BACKEND_URL}/loan/available`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resultJSON = await result.json();
    if (!resultJSON?.length || resultJSON?.length === 0) {
      return [];
    }
    return resultJSON;
  } catch (err) {
    console.log("[API]", "fetchMyLoans error:", err);
  }
};

export const _answerLoan = async (loanId: number, myId: number) => {
  try {
    const result = await fetch(`${BACKEND_URL}/loan/answer/${loanId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ myId }),
    });
    return result;
  } catch (err) {
    console.log("[API]", "fetchMyLoans error:", err);
  }
};

export const _returnLoan = async (loanId: number) => {
  try {
    const result = await fetch(`${BACKEND_URL}/loan/return/${loanId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return result;
  } catch (err) {
    console.log("[API]", "fetchMyLoans error:", err);
  }
};
