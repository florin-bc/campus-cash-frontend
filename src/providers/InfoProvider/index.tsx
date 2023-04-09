import React, { useContext, useMemo, useState } from "react";
import { InfoContext } from "./context";
import {
  _answerLoan,
  fetchAllLoans,
  fetchMyLoans,
  fetchMyTransactions,
  _returnLoan,
} from "../../api/info";
import { AuthContext } from "../AuthProvider/context";

const InfoProvider = ({ children }: { children: React.ReactNode }) => {
  const [transactions, setTransactions] = useState<any[]>();
  const [myLoans, setMyLoans] = useState<any[]>();
  const [allLoans, setAllLoans] = useState<any[]>();
  const { user } = useContext(AuthContext);

  const getMyTransactions = async () => {
    const result = await fetchMyTransactions(user?.id);
    setTransactions(transactions);
    console.log("getMyTransactions", result);
  };

  const getMyLoans = async () => {
    const result = await fetchMyLoans(user?.id);
    setMyLoans(result);
    console.log("getMyLoans", result);
  };

  const getAllLoans = async () => {
    const result = await fetchAllLoans();
    setAllLoans(result);
    console.log("getAllLoans", result);
  };

  const answerLoan = async (loanId: number) => {
    await _answerLoan(loanId, user?.id);
    await getMyTransactions();
    await getMyLoans();
    await getAllLoans();
  };

  const returnLoan = async (loanId: number) => {
    await _returnLoan(loanId);
    await getMyTransactions();
    await getMyLoans();
    await getAllLoans();
  };

  const value = useMemo(
    () => ({
      transactions,
      setTransactions,
      myLoans,
      setMyLoans,
      allLoans,
      setAllLoans,
      getMyLoans,
      getAllLoans,
      getMyTransactions,
      answerLoan,
      returnLoan,
    }),
    [transactions, myLoans, allLoans]
  );
  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
};

export default InfoProvider;
