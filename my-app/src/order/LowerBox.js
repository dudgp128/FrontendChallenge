// OrderPage 하단의 { 총 금액, 총 갯수, 주문하기 } 주문 박스
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { simulateOrder } from "./simulateOrder";

const Wrapper = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 20px 20px 0px 0px;
  background: #fff;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.25);
  padding: 23px 24.5px 27px 24.5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-sizing: border-box;

  & > .textBox {
    text-align: right;
    color: #000;
    font-family: Inter;
  }

  & > .buttonBox {
    display: flex;
    justify-content: center;
    height: 47.919px;
    background: #000;
    border: none;

    &:hover {
      cursor: pointer;
    }

    &:disabled {
      background: #c1c1c1;
      cursor: auto;
    }

    & > div {
      align-self: center;
      color: #fff;
      text-align: center;
    }
  }
`;

const LowerBox = () => {
  const [text, setText] = useState("주문하기");
  const totalCount = useSelector((state) => state.order.totalCount);
  const totalPrice = useSelector((state) => state.order.totalPrice);

  const navigate = useNavigate();

  const onClick = async (e) => {
    setText("로딩중...");
    e.target.className = "buttonBox";

    // 주문하기
    try {
      await simulateOrder();
      navigate("/complete");
    } catch (error) {
      navigate("/error");
    }
  };

  const isButtonDisabled = text === "로딩중..." || totalCount === 0;

  return (
    <Wrapper>
      <div className="textBox">
        <div> 총 수량 : {totalCount}개</div>
        <div> 총 가격 : {totalPrice.toLocaleString("en-US")}원 </div>
      </div>
      <button
        className={`buttonBox${totalCount ? " active" : ""}`}
        onClick={onClick}
        disabled={isButtonDisabled}
      >
        <div>{text}</div>
      </button>
    </Wrapper>
  );
};

export default LowerBox;
