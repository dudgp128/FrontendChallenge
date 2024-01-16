import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import ContentItem from "./ContentItem";

const FlexList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-right: 24px;
  padding-left: 25px;
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
  height: 100%;

  & > .loadingBox {
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const ContentList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("http://localhost:3001/items");
        setItems(data);
      } catch (error) {}
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <FlexList>
        <div className="loadingBox">
          목록을 <br />
          불러오고 있습니다.
        </div>
      </FlexList>
    );
  }

  return (
    <>
      {items.length && (
        <FlexList>
          {items.map(({ id, name, event, materialType, price }) => (
            <ContentItem
              key={id}
              name={name}
              event={event}
              materialType={materialType}
              price={price}
            />
          ))}
        </FlexList>
      )}
    </>
  );
};

export default ContentList;
