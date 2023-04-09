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
import { fetchUserById } from "../../api/auth";

const InfoProvider = ({ children }: { children: React.ReactNode }) => {
  const [transactions, setTransactions] = useState<any[]>();
  const [myLoans, setMyLoans] = useState<any[]>();
  const [allLoans, setAllLoans] = useState<any[]>();
  const { user, setUser } = useContext(AuthContext);

  const getMyTransactions = async () => {
    const result = await fetchMyTransactions(user?.id);
    setTransactions(transactions);
  };

  const getMyLoans = async () => {
    const result = await fetchMyLoans(user?.id);
    console.log("getMyLoans", result);
    setMyLoans(result);
  };

  const getAllLoans = async () => {
    const result = await fetchAllLoans();
    setAllLoans(result);
  };

  const answerLoan = async (loanId: number) => {
    await _answerLoan(loanId, user?.id);
    await getMyTransactions();
    await getMyLoans();
    await getAllLoans();
    const newUser = await fetchUserById(user?.id);
    setUser(newUser);
  };

  const returnLoan = async (loanId: number) => {
    await _returnLoan(loanId);
    await getMyTransactions();
    await getMyLoans();
    await getAllLoans();
    const newUser = await fetchUserById(user?.id);
    setUser(newUser);
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
