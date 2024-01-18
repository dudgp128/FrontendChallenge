# 주문 시스템 프로젝트

이 프로젝트는 React를 사용하여 모바일 웹에서 동작하는 주문 시스템을 구현한 것입니다.

전역 상태 관리 : Redux-toolkit  |  스타일링 : styled-components  |  HTTP 클라이언트 : axios

## /order

- `display: flex , justify-contents : space-between` 상단 로고와, 총 가격 및 주문하기 버튼을 고정했습니다.

- 주문 아이템은 페이지 진입 시 로딩되며, useState로 관리했습니다. 
`const [loading, setLoading] = useState();`

- Counter를 사용하여 주문 아이템의 개수를 조작하며 { 주문한 아이템들의 정보, 총 수량 , 총 가격 } 을 전역 상태로 관리했습니다. 

```
order: {
  items: [],  // 주문한 아이템들의 정보
  totalCount: 0, // 총 수량
  totalPrice: 0, // 총 가격
};
```

- 주문 아이템의 합계 수량이 0일 때 button 속성 disabled로 설정하였습니다.

- 주문하기 버튼의 text를 useState로 관리하며 클릭 후 setText('로딩 중')으로 상태를 변경했습니다.  
`const [text, setText] = useState('주문하기')`

### simulateOrder()

- 주문을 하는 시뮬레이션 함수 : Math.random으로 주문 성공(1)/실패(0)를 정하고, 1초 후 결과를 반환합니다.

## /complete, /error

주문이 성공하면 /complete, 주문이 실패하면 /error 페이지가 노출됩니다.

### useDelayedNavigation

- 일정 시간 이후, 라우터를 이동하는 커스텀 훅 : useDelayedNavigation(path, delay)

- `useDelayedNavigation('/order', 3)` 주문 결과 페이지에서 3초 뒤에 자동으로 /order 페이지로 돌아갑니다.
