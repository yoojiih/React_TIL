import React, { useState } from 'react'; 
import { Button, Modal} from 'react-bootstrap'; 

function StateLearn() {

    //일반 변수에 저장 - {}을 이용해 데이터 바인딩 가능
    const posts = '강남 고기 맛집';

    //state 변수 - 리액트는 state가 수정이 일어나면 state가 포함된 HTML을 자동으로 새로고침없이 재렌더링 해줌 -> 웹앱을 만들기위한 필수조건
    //즉 자주 바뀌지 않는 데이터는 일반 변수에 저장하고 상품명, 글제목, 가격 이런것 처럼 자주 변하는 데이터들을 state에 저장하시게 좋은 관습

    //useState을 이용해 저장 - 데이터 바인딩 가능
    //const [글제목, 글제목변경] = useState('남자 코트 추천');

    //state에 array 넣기 
    const [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] );  

    const [따봉, 따봉변경] = useState(0); 
    const [누른제목, 누른제목변경] = useState(0);  // 현재 몇번째 글제목 눌렀는지 정보를 보관
    const [modal, modal변경] = useState(false);  // 모달창 열고 닫기 정보 저장

    // <input> 입력할때마다 state로 저장해야하니까 일단 빈 state 생성 (빈 문자열)
    const [입력값, 입력값변경] = useState('');
    
    //------------< 일부만 변경 >--------------
    //state변경함수는 완전히 데이터 대체하기 때문에 일부만 변경 시 복사본을 활용해야함
    //1. 수정하고 싶은 state의 deep/shallow 복사본을 하나 생성해 변수에 저장
    //2. 복사본을 수정.
    //3. 복사본을 state변경함수()에 집어넣음 -> state는 등호로 직접조작 안되기 때문

    function 제목바꾸기() { 
        var newArray = [...글제목];
        newArray[0] = '여자코트 추천'; 
        글제목변경( newArray );       
    }   

    return (

      //html이 아닌 jsx 문법 사용 (class -> className) 
      <div className="App">

        {/* -----------< 일부만 변경 >-------------- 버튼 누르면 남자코트 추천 -> 여자코트추천으로 [0]번째 array만 부분적으로 바뀜 */}
        <button onClick={ 제목바꾸기 }> 수정버튼 </button>

        <hr/>
        
        {/*------------< map 문법 >--------------
        리액트에서 중괄호 내 반복문을 사용하기 위한 array에 붙일 수 있는 일종의 내장함수
        기존 array안의 모든 자료에 똑같은 작업을 하나씩 변형시켜 새로운 array를 만들기 위한 자바스크립트 문법
        소괄호 안에 콜백함수 하나 넣는게 기본
            1. 자료.map(()=>{})
            2. return(반복시킬HTML)
            a: 파라미터로 a 입력 시 자료 array 안에 있던 모든 data를 하나씩 출력
            i: 반복문 돌 때마다 0,1,2.. 가 되는 변수
          ------------< map 문법 >--------------
          //map 안의 코드가 어레이 자료의 갯수만큼 3번 실행되어 각 자료에 전부 10을 곱해주는 코드 -> newArray에는 [20, 30, 40]
          var 어레이 = [2,3,4];
          var newArray = 어레이.map(function(a){  
            return a * 10  
          });
        */}

        {/* [글제목] state 갯수만큼 생성 후 각각 다른제목 부여 - { a }
            <h3> 글 제목 누를 때 각각 다른 모달창 뜨게  
            <span> 따봉버튼 누르면 갯수 1씩 증가 | 변경함수 사용방법 : 따봉변경(대체할 데이터) 
            onClick={함수}
            onClick={function(){실행할 코드}}
            onClick={() => {실행할 코드}} 
        */}
        { 글제목.map(function(a,i){ 
          return (
          <div className="list" key={i}> 
            <h3 onClick={ ()=>{ 누른제목변경(i) } }>{ a }{누른제목}<span onClick={ ()=>{ 따봉변경(따봉 + 1) } } >👍{따봉}</span></h3>
            <p>2월 18일 발행</p>
            <hr/>
          </div>
          )
        }) 
        }

        {/* ------------컴포넌트 문법--------------
          복잡한 html을 한단어로 치환가능 (like 함수)
          작명시 영어대문자로 시작(한글 안됨) 
        */}
        <button onClick={() => {modal변경(!modal)} }> 열고 닫기 </button>
        {/* { 
            modal === true 
            ? <MyModal 글제목={글제목} 누른제목={누른제목} ></MyModal>
            : null          
        }
         */}
        <MyModal show={modal} 글제목={글제목} 누른제목={누른제목} onHide={() => modal변경(false)} />
        
        {/* ----------< Input + 이벤트 핸들러 >--------------- 

        사용자가 input(textarea, select도 가능)에 입력한 값 알아내는 법
          1) onChange : input에 입력할 때마다 특정 함수를 실시간으로 동작 시키고 싶을 때 사용
                        특정함수 -> ( 입력값이라는 state가 e.target.value로 변경 ) 
          2) e.target: 현재 onChange 이벤트가 동작하는 HTML요소 (=input 태그)
          3) .value : input등에 입력한 값 출력해줌
        */}
        
        <div className="publish">
          <input onChange={ (e)=>{ 입력값변경(e.target.value) } } />
			
          {/* 버튼을 누르면 input태그에서 입력한 [입력값] state를 [글제목] state에 추가. */}
          <button onClick={ ()=>{ 
            const arrayCopy = [...글제목];
            arrayCopy.unshift(입력값); 
            글제목변경( arrayCopy )
          }}>저장</button>
        </div>

        {/* HTML에 스타일을 직접 넣고 싶으면 
        <div style={ 스타일용 오브젝트 }> 글씨 </div> 이런식으로 JSX 상에서는 무조건 {} 오브젝트로 바꿔 넣어야함
                  { 속성명 : '속성값' } -> 속성명 규칙:  - (대쉬)기호 X, 모든 단어 붙여써야 되고 붙일 때 앞글자 → 대문자로 치환
        */}
        <div style={ {color : 'blue', fontSize : '30px'} }> 글씨 </div>
    </div> 
  );
}

function MyModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.글제목[props.누른제목]}</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
//-------------props 문법 (부모의 state 갖다 쓸 때)------------------
//컴포넌트간 자료 전달법 부모 -> 자식까지 props로 state를 전송 (App: 부모, Modal: 자식)
// 1. <자식컴포넌트 전송할이름={state명} y={y}>여러개 전송 가능  변수명은 {} 일반텍스트는 ""
// 2. function 자식컴포넌트명(props){ } 자식컴포넌트에서 props파라미터 입력후
//    props 파라미터엔 전송한 모든 props 데이터가 들어가 있기 때문에 원하는 것만 꺼내 쓰면 됨  props.전송할이름



export default StateLearn
//? import Table: export default로 내보낸 데이터 가져오기 -> import 변수명 from '경로';  변수명부분 자유롭게 작명가능!
//? import {Table} : Table 이라는 변수/함수 가져오기  -> export{} 했던 변수명 그대로 써야함
//? export default name1 :파일마다  export default 키워드는 하나만 사용 가능 & 변수명, 함수명, 자료형 전부 배출가능 
//? export {} 문법 : 변수 여러개 내보낼 때 { name1, name2 }
// import / export 
//변수, 함수, 자료형등을 다른 파일로 저장해 불러오는 방식 (모듈화)

// data.js --> App.js 변수 or 데이터 보내려면 
// 1. data.js 파일에서 원하는 데이터를 export 
// 2. App.js 파일에서는 data.js를 import  

// (App.js 파일)
// import { name1, name2 } from './data.js';
 {/*------------<모달창 UI (클릭시 동작하는 UI)>--------------
        버튼 누를때마다 열고 닫히는 버튼 구현시 -> { modal변경(!modal) } 
        문자, 숫자, true/false 자료형들은 수정시 복사본 만들지 않아도 가능
        자바스크립트로 구현 ⇒ display : block 
        리액트로 구현 ⇒ [ UI 제작 패턴 ] UI 관련 정보를 state로 저장해둔 뒤에 state가 달라지면 UI도 달라지게 만들면 됨.
                    1. 상태정보 저장하는 state 하나 만들고 -> UI가 보이는/보이지않는(true/false 자료형)
                    2. state 상태에 따른 UI보여주는 조건문 작성 ( ex) state가 ? 일 때, ? 보여주기 ) true일때만 UI 보여주는
                    리액트는 중괄호(JSX) 내 조건문, 반복문 인식 불가 -> 삼항연산자 : 조건식 ? (참) : (거짓) 일 때 실행 코드
                    3. 버튼같은거 누르면 state를 ~하게 바꿔달라고 구현 -> 열기 버튼 누르면 state 가 true로 바뀌도록 
                    
        (UI 제작 패턴) props를 응용한 상세페이지 만들기
            -> <Modal>이라는 태그 안에서 원하는 이름의 props를 전송 모달 함수내에선 props.이름
        */}