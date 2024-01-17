// 주문을 하는 함수 (시뮬레이션)
export async function simulateOrder() {
  return new Promise((resolve, reject) => {
    // 임의로 주문 성공 또는 실패를 시뮬레이션
    const isSuccess = Math.random() < 0.5;

    // 시뮬레이션 결과에 따라 Promise를 해결 또는 거부
    if (isSuccess) {
      resolve({ status: 200 });
    } else {
      reject({ status: 400 });
    }
  });
}
