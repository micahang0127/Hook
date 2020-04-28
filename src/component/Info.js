import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  /* 
  useEffect 사용 
  - useEffect는 기본적으로 렌더링 되고난 직후마다 실행되며,
    두번째 파라미터 배열에 무엇을 넣느냐에 따라 실행되는 조건이 달라진다. 
  - 만약, 컴포넌트가 언마운트 되기 전이나, 업데이트 되기 직전에 작업을 수행하고 싶다면, 
    useEffect에서 뒷정리(cleanup)함수를 반환해주어야 한다.



  1. 기존)
    useEffect(() => {
        console.log('렌더링 완료');
        console.log({ name, nickname });
    });


  2.마운트 될 때만 실행 
    useEffect(() => {
      console.log('마운트 될 때만 실행됩니다.');
    }, []);

    만약 마운트 될 때만 실행하고 싶을 때는, 
    즉, useEffect에서 설정한 함수가 처음 렌더링 될 때만 실행할 경우(업데이트의 경우 실행X),
    함수의 두번째 파라미터로 비어 있는 배열을 넣어준다. 

  */

  /* 
    3. 특정 값이 업데이트 될 때만 실행
      componentDidUpdate(prevProps, prevState) {
        if(prevProps.value !== this.props.value){
          doSomthing();
        }
      }

      useEffect(() => {
        console.log(name);
      }, [name]);

  */


  useEffect(() => {
    console.log('effect');         // 1) 처음 렌더링 시 나타남. 2) 업데이트 시 나타남
    console.log(name);             // 1) 처음 렌더링 시 나타남. 2) 업데이트 시 나타남
    return () =>  {            // 뒷정리 함수
      console.log('cleanup');     // 1) 업데이트 시 나타남
      console.log(name);          // 1) 업데이트 시 나타남
      };
  })
  //  }, [])          //  !!! 로 뒤에 빈배열을 주면, 오직 언마운트 될 때만 뒷정리 함수가 호출된다. 




  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div style={{ border:'solid 1px darkblue', padding:'20px', margin:'10px'}}>
        <h2>[ useEffect ]</h2>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
      console.log확인하기
    </div>
  );
};

export default Info;

/* 
    useEffect 는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook이다. 
   클래스형 컴포넌트의 componentDidMount 와 componentDidUpdate를 합친 형태로 보아도 무방하다.
*/