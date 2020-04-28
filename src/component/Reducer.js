import React, { useReducer } from 'react';

/* 
    Redux에서는 액션 객체에는 어떤 액션인지 정의하는 type필드가 꼭 있어야 했지만,
    useReducer에서는 액션 객체에 꼭 type를 지니고 있을 필요가 없다. 
    심지어, 객체가 아니라 문자열이나, 숫자여도 상관없다.
*/

function reducer(state, action) {
  // action.type 에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
                                    // useReducer의 [ 첫번째 파라미터는 리듀서 함수, 두번재 파라미터는 리듀서의 기본값 ]을 넣어준다.

  return (
    <div style={{ border:'solid 1px darkblue', padding:'20px', margin:'10px'}}>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default Reducer;
