import Check from "../common/Check";
import { PageContainer } from "../common/PageContainer";

const CompletePage = () => {
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
