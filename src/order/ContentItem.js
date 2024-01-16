import { useState } from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: rgba(247, 90, 47, 0.1);
`;
const ContentItem = ({ key, name, event, price }) => {
  const [count, setCount] = useState(0);

  return (
    <ItemContainer>
      <div className="imgWrapper" />
      <div>
        <div>
          <div>{name}</div>
          <div>{event}</div>
        </div>
        <div>
          <div>-</div>
          <div>{count}</div>
          <div>+</div>
        </div>
        <div>{price}원</div>
      </div>
      <div></div>
    </ItemContainer>
  );
};

export default ContentItem;
