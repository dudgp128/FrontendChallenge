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
    return <div>Loading...</div>;
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
