import styled from "styled-components";
import { Logo } from "../common/Logo";
import LowerBox from "./LowerBox";
import ContentList from "./ContentList";
import { useEffect } from "react";
import { initialized } from "../module/order";
import { useDispatch } from "react-redux";

const Container = styled.div`
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
    overflow-y: scroll;
  }
`;
const OrderPage = () => {
  const dispatch = useDispatch();

  // 새로 렌더링될때, order redux 초기화하기
  useEffect(() => {
    dispatch(initialized());
  }, []);

  return (
    <Container>
      <div className="upper">
        <Logo width={"94.11"} />
      </div>
      <div className="content">
        <ContentList />
      </div>
      <LowerBox />
    </Container>
  );
};

export default OrderPage;
