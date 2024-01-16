import { useSelector } from "react-redux";
import styled from "styled-components";

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
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & > .buttonBox {
    display: flex;
    justify-content: center;
    height: 47.919px;
    background: #c1c1c1;

    & > div {
      align-self: center;

      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

const LowerBox = () => {
  const allCount = useSelector((state) => state.item.count);
  const allPrice = useSelector((state) => state.item.price);

  return (
    <Wrapper>
      <div className="textBox">
        <div> 총 수량 : {allCount}개</div>
        <div> 총 가격 : {allPrice}원 </div>
      </div>
      <div className="buttonBox">
        <div>주문하기</div>
      </div>
    </Wrapper>
  );
};

export default LowerBox;
