import styled from "styled-components";
import { Logo } from "../common/Logo";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background: #000;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 41px;
  justify-content: center;

  & > div {
    display: flex;
    justify-content: center;

    & > .gotoOrder {
      display: flex;
      width: fit-content;
      height: 45px;
      flex-direction: column;
      justify-content: center;
      flex-shrink: 0;
      padding: 21px 11px 22px 11px;
      border-radius: 20px;

      color: #000;
      text-align: center;
      font-family: Inter;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      background-color: #fff;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
const HomePage = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/order");
  };

  return (
    <Container>
      <div>
        <Logo width={150} />
      </div>
      <div>
        <div className="gotoOrder" onClick={onClick}>
          주문하러 가기
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
