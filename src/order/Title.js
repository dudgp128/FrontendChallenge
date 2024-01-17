import styled from "styled-components";

const TitleBox = styled.div`
  & > div {
    white-space: pre;
  }
  & > .eventBox {
    display: flex;
    box-sizing: border-box;
    border-radius: 10px;
    background: #f75a2f;
    padding: 4px;
    align-items: center;

    & > span {
      color: #fff;
      text-align: center;
      font-family: Roboto;
      font-size: 13px;
    }
  }
`;

export const Title = ({ name, event }) => {
  return (
    <TitleBox>
      <div> {name} </div>
      {event ? (
        <div className="eventBox">
          <span>이벤트</span>
        </div>
      ) : null}
    </TitleBox>
  );
};
