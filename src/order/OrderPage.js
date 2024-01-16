import styled from "styled-components";
import { Logo } from "../common/Logo";
import LowerBox from "./LowerBox";

const Container = styled.div`
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-between;

  & > .upper {
    width: 100%;
    height: 57px;
    background-color: #000;
    box-sizing: border-box;
    padding: 12.5px;
  }

  & > .content {
    width: 100%;
    height: calc(100vh - 57px - 170px); // 전체 화면 - 상단 - 하단
  }
`;
const OrderPage = () => {
  return (
    <Container>
      <div className="upper">
        <Logo width={"94.11"} />
      </div>
      <div className="content" />
      <LowerBox />
    </Container>
  );
};

export default OrderPage;
