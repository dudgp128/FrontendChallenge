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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/items");
        console.log(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return <FlexList></FlexList>;
};

export default ContentList;
