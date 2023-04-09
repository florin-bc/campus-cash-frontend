import React from "react";

export interface InfoContextType {
  transactions: any[] | undefined;
  setTransactions: React.Dispatch<React.SetStateAction<any[] | undefined>>;
  getMyTransactions: () => Promise<void>;
  myLoans: any[] | undefined;
  setMyLoans: React.Dispatch<React.SetStateAction<any[] | undefined>>;
  allLoans: any[] | undefined;
  setAllLoans: React.Dispatch<React.SetStateAction<any[] | undefined>>;
  getMyLoans: () => Promise<void>;
  getAllLoans: () => Promise<void>;
  answerLoan: () => Promise<void>;
  returnLoan: () => Promise<void>;
}

export const InfoContext = React.createContext<InfoContextType>({
  transactions: undefined,
  setTransactions: () => {},
  getMyTransactions: async () => {},
  myLoans: undefined,
  setMyLoans: () => {},
  allLoans: undefined,
  setAllLoans: () => {},
  getMyLoans: async () => {},
  getAllLoans: async () => {},
  answerLoan: async () => {},
  returnLoan: async () => {},
});
