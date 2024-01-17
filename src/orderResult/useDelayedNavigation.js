// delay 시간 후, path로 이동하는 커스텀 훅
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useDelayedNavigation = (path, delay) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(path);
    }, delay);
  }, []);
};
