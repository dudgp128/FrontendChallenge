// 제품 정보를 나타내는 수직(row) 리스트
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import ContentItem from "./ContentItem";

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
          {items.map((item) => (
            <ContentItem key={item.id} item={item} />
          ))}
        </FlexList>
      )}
    </>
  );
};

export default ContentList;

const FlexList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 18px 24.5px;
  gap: 18px;
  width: 100%;
  justify-content: center;
  box-sizing: border-box;

  & > .loadingBox {
    color: #000;
    text-align: center;
  }
`;
