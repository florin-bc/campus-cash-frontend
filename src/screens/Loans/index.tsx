import { CardComponents, Components } from "./styled";
import { useContext, useEffect, useMemo } from "react";
import { InfoContext } from "../../providers/InfoProvider/context";
import { AuthContext } from "../../providers/AuthProvider/context";
import ProjectScreenContainer from "../../components/ProjectScreenContainer";
import NavBar from "../../components/NavBar/NavBar";

const Loans = () => {
  const { allLoans, myLoans, getMyLoans, getAllLoans, answerLoan, returnLoan } =
    useContext(InfoContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getMyLoans().then();
    getAllLoans().then();
  }, []);

  const onLoanAccept = (loanId: number) => {
    answerLoan(loanId).then();
  };

  const onLoadReturn = (loanId: number) => {
    returnLoan(loanId).then();
  };

  const allLoansBesideMine = useMemo(() => {
    return allLoans?.filter((a) => !myLoans?.includes((b) => b.id === a.id));
  }, [allLoans, myLoans]);

  const borrows = useMemo(() => {
    return myLoans?.filter((l) => l?.toUserId === user?.id);
  }, [myLoans]);

  const lends = useMemo(() => {
    return myLoans?.filter((l) => l?.fromUserId === user?.id);
  }, [myLoans]);

  return (
    <ProjectScreenContainer>
      <NavBar context={"Loans"} />
      <Components.HeaderTitle>Loan Requests</Components.HeaderTitle>
      {allLoansBesideMine && allLoansBesideMine?.length > 0 ? (
        <Components.GreyWrapper>
          <Components.Subtitle>Demand</Components.Subtitle>
          {allLoansBesideMine?.map((item) => {
            const nameLetters = item?.toUserId;
            const amount = item?.amount;
            const amountToBeReceived =
              amount + amount * (item?.interestRate / 100);
            const expirationDate = new Date(
              item?.expirationDate
            )?.toLocaleString("en-GB");
            return (
              <LoanCard
                nameLetters={nameLetters}
                amount={amount}
                amountToBeReceived={amountToBeReceived}
                expirationDate={expirationDate}
                onAccept={() => onLoanAccept?.(item?.id)}
              />
            );
          })}
        </Components.GreyWrapper>
      ) : null}
      {borrows && borrows?.length > 0 ? (
        <Components.GreyWrapper>
          <Components.SubtitleWrapper>
            <Components.Subtitle>Loans to pay</Components.Subtitle>$
            {borrows?.length > 4 ? (
              <Components.SeeMore>See more</Components.SeeMore>
            ) : null}
          </Components.SubtitleWrapper>
          <Components.HorizontalWrapper>
            {borrows?.map((item) => {
              return (
                <CardComponents.LeftSide.NameLettersWrapper
                  onPress={() => onLoadReturn(item?.id)}
                >
                  <CardComponents.LeftSide.NameLetters>
                    {item?.fromUserId}
                  </CardComponents.LeftSide.NameLetters>
                </CardComponents.LeftSide.NameLettersWrapper>
              );
            })}
          </Components.HorizontalWrapper>
        </Components.GreyWrapper>
      ) : null}
      {lends && lends?.length > 0 ? (
        <Components.GreyWrapper>
          <Components.SubtitleWrapper>
            <Components.Subtitle>Loans to get</Components.Subtitle>
            {lends?.length > 4 ? (
              <Components.SeeMore>See more</Components.SeeMore>
            ) : null}
          </Components.SubtitleWrapper>
          <Components.HorizontalWrapper>
            {lends?.map((item) => {
              return (
                <CardComponents.LeftSide.NameLettersWrapper>
                  <CardComponents.LeftSide.NameLetters>
                    {item?.toUserId}
                  </CardComponents.LeftSide.NameLetters>
                </CardComponents.LeftSide.NameLettersWrapper>
              );
            })}
          </Components.HorizontalWrapper>
        </Components.GreyWrapper>
      ) : null}
    </ProjectScreenContainer>
  );
};

export default Loans;

const LoanCard = ({
  nameLetters,
  amount,
  amountToBeReceived,
  expirationDate,
  onAccept,
}: {
  nameLetters: string;
  amount: number;
  amountToBeReceived: number;
  expirationDate: string;
  onAccept: () => void;
}) => {
  return (
    <CardComponents.Wrapper>
      <CardComponents.LeftSide.Wrapper>
        <CardComponents.LeftSide.NameLettersWrapper>
          <CardComponents.LeftSide.NameLetters>
            {nameLetters}
          </CardComponents.LeftSide.NameLetters>
        </CardComponents.LeftSide.NameLettersWrapper>
        <CardComponents.LeftSide.TextField.Wrapper>
          <CardComponents.LeftSide.TextField.Text>
            Give: {amount}
          </CardComponents.LeftSide.TextField.Text>
          <CardComponents.LeftSide.TextField.Text>
            Get: {amountToBeReceived}
          </CardComponents.LeftSide.TextField.Text>
          <CardComponents.LeftSide.TextField.Text>
            Date: {expirationDate}
          </CardComponents.LeftSide.TextField.Text>
        </CardComponents.LeftSide.TextField.Wrapper>
      </CardComponents.LeftSide.Wrapper>
      <CardComponents.ActionButton onPress={onAccept}>
        <CardComponents.ActionButtonText>
          Accept
        </CardComponents.ActionButtonText>
      </CardComponents.ActionButton>
    </CardComponents.Wrapper>
  );
};
