// 주문 실패 페이지 (/error)
import { PageContainer } from "../common/PageContainer";
import { useDelayedNavigation } from "./useDelayedNavigation";

const ErrorPage = () => {
  useDelayedNavigation("/order", 3000);

  return (
    <PageContainer>
      <div>
        주문에 실패하였습니다. <br /> 다시 시도해주십시오.
      </div>
    </PageContainer>
  );
};

export default ErrorPage;
