import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

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
          {items.map(({ id, name }) => (
            <div key={id}>{name}</div>
          ))}
        </FlexList>
      )}
    </>
  );
};

export default ContentList;
