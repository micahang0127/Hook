#### Hook
===
  ##### Hook은 ? 
    Hook은 React16.8버전에 새로 추가 되었다.
    Hook은 클래스 컴포넌트를 작성하지 않아도 state(useState)와 생명주기 같은 특징(useEffect)들을 사용할 수 있다.
    상태관련 로직을 재사용 하는 방법
===   
  ##### Custom Hook 
    custom hook은 사른 함수(function)에서 가져다 사용할 수 있다. 
    이름이 'use'로 시작하고(명명규칙(이는 liner프러그인이 Hook을 인식하고 버를 찾을 수 있게 해준다.), 안에서 다른 hook을 호출한다면 그 함수를 custom hook이라 부를 수 있다. 
===
  ##### Hook 사용 이유.
    class컴포넌트에서는 생명주기 메서드 각각에 쪼개서 넣어야만 했지만, hook에서는 서로 관련있는 코드들을 한군데에 모아서 작성할 수 있다. 
===    
  ##### Hook 사용 규칙.
    1. 최상위에서만 Hook을 호출해야 한다. 
        (반복문, 조건문, 중첩된 함수 내 에서 hook을 실행하지 말것.)
    2. React함수 컴포넌트 내에서만 hook을 호출해야 한다. 
       ( 아니면, 바로 직접 작성한 custom Hook 내에서도 가능)
       
===
  ##### useEffect
  useEffect(() => {
    componentDidMount, componentDidUpdate, componentWillUnmount가 합쳐진 것으로 생각해도 좋다
    브라우저 api를 이용해 문서의 타이틀을 업데이트함
    데이터를 가져오거나, dom 
    useEffect를 사욯하면, react는 dom을 바꾼 뒤 effect함수를 실행
    기본적으로, React는 매 렌더링 이후 effect를 실행 
    useState와 마찬가지로 컴포넌트내에서 여러개의 effect를 사용할 수 있다. 
