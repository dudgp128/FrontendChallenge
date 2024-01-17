// 주문 성공 페이지 (/complete)
import Check from "../common/Check";
import { PageContainer } from "../common/PageContainer";
import { useDelayedNavigation } from "./useDelayedNavigation";

const CompletePage = () => {
  useDelayedNavigation("/order", 3000);

  return (
    <PageContainer>
      <div>
        <Check />
      </div>
      <div>주문이 완료되었습니다.</div>
    </PageContainer>
  );
};

export default CompletePage;
