import { useState } from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../module/order";

const ItemContainer = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 9px 12px;
  box-sizing: border-box;
  display: flex;
  gap: 8px;

  & > .imgWrapper {
    height: 100%;
    aspect-ratio: 1/1;
    background: #d9d9d9;
  }

  &.active {
    background: rgba(247, 90, 47, 0.1);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  & > div {
    display: flex;
    align-items: center;
  }

  & > .bottom {
    justify-content: space-between;

    & > .counterBox {
      display: flex;

      & > span {
        align-items: center;
        justify-content: center;
        text-align: center;
        display: flex;
        width: 18px;
        height: 18px;

        &:nth-child(odd) {
          cursor: pointer;
        }
      }
    }
  }
`;

const ContentItem = ({ name, event, price }) => {
  const [count, setCount] = useState(0);

  const allCount = useSelector((state) => state.order.count);
  const allPrice = useSelector((state) => state.order.price);

  const dispatch = useDispatch();

  const calcCount = (e) => {
    const { innerText } = e.target;
    const operatorList = {
      "-": () => {
        if (count > 0) {
          setCount(count - 1);
          dispatch(
            changeField({ count: allCount - 1, price: allPrice - price })
          );
        }
      },
      "+": () => {
        if (count < 999) {
          setCount(count + 1);
          dispatch(
            changeField({ count: allCount + 1, price: allPrice + price })
          );
        }
      },
    };

    operatorList[innerText]();
  };

  return (
    <ItemContainer className={` ${count > 0 && "active"}`}>
      <div className="imgWrapper" />
      <InfoContainer>
        <Title name={name} event={event} />
        <div className="bottom">
          <div className="counterBox">
            <span onClick={calcCount}>-</span>
            <span>{count}</span>
            <span onClick={calcCount}>+</span>
          </div>
          <div>{price}원</div>
        </div>
      </InfoContainer>
    </ItemContainer>
  );
};

export default ContentItem;
