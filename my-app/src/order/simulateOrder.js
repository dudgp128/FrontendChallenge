// 주문을 하는 함수 (시뮬레이션)
export async function simulateOrder() {
  return new Promise((resolve, reject) => {
    // 임의로 주문 성공(1), 실패(0) 정하기
    const isSuccess = Math.floor(Math.random() * 2);

    if (isSuccess) {
      setTimeout(() => {
        resolve({ status: 200 });
      }, 1000); // 1초 후에 성공
    } else {
      setTimeout(() => {
        reject({ status: 400, message: "주문 실패" });
      }, 1000); // 1초 후에 실패
    }
  });
}
