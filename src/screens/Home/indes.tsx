import ProjectScreenContainer from "../../components/ProjectScreenContainer";
import { useContext, useEffect, useMemo } from "react";
import { AuthContext } from "../../providers/AuthProvider/context";
import { CardComponents, Components } from "./styled";
import IconAdd from "../../../assets/icons/icon-add.svg";
import IconSend from "../../../assets/icons/icon-send.svg";
import { Text } from "react-native";
import { InfoContext } from "../../providers/InfoProvider/context";
import IconUniPayment from "../../../assets/icons/icon-uni-payment.svg";
import IconHomePayment from "../../../assets/icons/icon-home-payment.svg";
import IconRestantaPayment from "../../../assets/icons/icon-restanta-payment.svg";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { getMyTransactions, transactions } = useContext(InfoContext);

  useEffect(() => {
    if (user) {
      getMyTransactions().then();
    }
  }, [user]);

  const profileSub = useMemo(() => {
    const processed = `${user?.firstName
      ?.slice(0, 1)
      ?.toUpperCase()}${user?.lastName?.slice(0, 1)?.toUpperCase()}`;
    return processed;
  }, [user]);

  return (
    <ProjectScreenContainer profileSub={profileSub} rightButton={"settings"}>
      <NavBar context={"Home"} />
      <Components.HeaderTitle>
        Welcome, {user?.firstName}:)
      </Components.HeaderTitle>
      <Components.GreyWrapper>
        <Components.Subtitle>Balance</Components.Subtitle>
        <Components.Balance>{user?.amountOfMoney}.00 Lei</Components.Balance>
        <Components.ButtonsWrapper>
          <Components.ActionButton>
            <IconAdd />
            <Text>Add money</Text>
          </Components.ActionButton>
          <Components.ActionButton>
            <IconSend />
            <Text>Send money</Text>
          </Components.ActionButton>
        </Components.ButtonsWrapper>
        {transactions && transactions?.length > 0 ? (
          <Components.Subtitle marginTop={32}>Transactions</Components.Subtitle>
        ) : null}
        {transactions &&
          transactions?.map((item) => {
            const paymentType = item?.paymentType || "";
            const amount = item?.amount;
            const cashback = item?.cashback;
            const date = new Date(item?.createdAt)?.toLocaleString("en-GB");
            return (
              <Card
                type={paymentType}
                date={date}
                amount={amount}
                cashback={cashback}
              />
            );
          })}
        {transactions && transactions?.length > 3 ? (
          <Components.SeeMore.Wrapper>
            <Components.SeeMore.Text>See more</Components.SeeMore.Text>
          </Components.SeeMore.Wrapper>
        ) : null}
      </Components.GreyWrapper>
    </ProjectScreenContainer>
  );
};

export default Home;

const Card = ({ type, date, amount, cashback }: any) => {
  const Icon = useMemo(() => {
    switch (type) {
      case "Regie Camin":
        return IconHomePayment;
      case "Restanta":
        return IconRestantaPayment;
      case "Refacere materie":
      case "Taxa Anuala":
        return IconUniPayment;
      default:
        return null;
    }
  }, [type]);

  return (
    <CardComponents.Wrapper>
      <CardComponents.LeftSide.Wrapper>
        <CardComponents.LeftSide.IconWrapper>
          <Icon />
        </CardComponents.LeftSide.IconWrapper>
        <CardComponents.LeftSide.TextField.Wrapper>
          <CardComponents.LeftSide.TextField.Title>
            {type}
          </CardComponents.LeftSide.TextField.Title>
          <CardComponents.LeftSide.TextField.Date>
            {date}
          </CardComponents.LeftSide.TextField.Date>
        </CardComponents.LeftSide.TextField.Wrapper>
      </CardComponents.LeftSide.Wrapper>
      <CardComponents.RightSide.Wrapper>
        <CardComponents.RightSide.Amount>
          -{amount} lei
        </CardComponents.RightSide.Amount>
        <CardComponents.RightSide.Cashback>
          +{cashback} lei
        </CardComponents.RightSide.Cashback>
      </CardComponents.RightSide.Wrapper>
    </CardComponents.Wrapper>
  );
};
