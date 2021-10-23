import React, { useState, useEffect } from 'react';

//-------------------useHistory : 페이지 이동함수----------------
//<Link> 대신 페이지 이동함수를 사용해 코드 실행 중간에 페이지 이동 
//  1. useHistory() 라는 함수를 import
//  2. useHistory() Hook 사용
//  - history 라는 변수엔 페이지 이동 내역 + 유용한 함수가 저장되어있는 "큰 object {} 자료 "
//   goBack()함수 라이브러리 :[뒤로가기 버튼] 눌렀을때 실행됨
//    push()함수 라이브러리 : 특정경로(커스텀 페이지)로 이동시킴
//-------------------useParams : URL 파라미터 문법 이용해 상세페이지 구현하기 ----------------
// id자리에 입력한 숫자를 밑에 html문에 집어넣고 싶을때 사용하는 hook  
// URL 뒤에 뭘 적든 특정 경로로 안내하는 기능으로 사용 가능 → 이걸 이용시 상세페이지 여러개를 한번에 만들어낼 수 있음
// 자료 순서 변경되어도 상세페이지 그대로 보여주는 방법으로 사용

// 1. path에 : (콜론기호) /뒤에 아무 문자나 넣어도 이 Route(경로)로 이동시켜주라는 뜻
//    ex) ( app.js ) <Route path="/detail/:id"> <Detail shoes={shoes}/> </Route> */} :id 자리에 아무문자나 입력해도 <Detail> 컴포넌트 보여줌 
//    id 부분은 함수 파라미터처럼 몇개든 상관없이 추가 가능하고 자유롭게 작명 가능 ex)  /detail/:id/:name 
// 2. useParams()
// shoes[:id자리에 있던 숫자] 이용하려면 app.js 에 있던 id 갖다 써야함 
//    1. useParams import 해오고
//       useParams : 현재 URL에 적힌 모든 파라미터를 {파라미터1,파라미터2} 형식으로 저장해주는 함수
//    2. useParams() 훅 사용해 {}안에 들어있는 사용자가 입력한 모든 url 파라미터값을 변수로 만들기 위해 distructuring 문법을 이용해 
//       id라는 변수(id 자리에 있던 숫자를 의미)로 따로 저장해 갖다 쓸 수 있음
//       ex) /detail/100 접속시 id 변수 = 100
//    3. [id] 갖다 씀 
//      /detail/0 접속시 0번째 상품명 나오도록 URL에 따라 상품명 다르게 보여주는 기능
//      상품 정렬버튼이 있다고 가정했을 때 상품 데이터 순서 변경되어도 상세페이지는 그대로 보여주려면
//      Detail.js에서 데이터바인딩 할 때 shoes중에 0번째 데이터의 제목 불러올게 아니라
//      shoes라는 상품 데이터 안에 존재하는 영구번호 즉 전체 자료중에 영구번호 0을 가진 데이터의 제목을 불러와야함 
//      영구번호가 같은 {상품데이터}를 찾아서 데이터 바인딩

// find() : Array 안에서 원하는 자료를 찾고싶을 때 사용 (filter() 함수, 그냥 반복문 써도 상관 x )
//          파라미터 = 상품 = array 안에 있던 하나하나의 데이터를 의미

//     array.find(콜백함수(파라미터){
//         return 조건문가능 (참인 데이터만 새로운 변수에 저장 등)
//     });
//    
//    조건식엔 현재 URL의 /:id에 적힌 값과 상품의 영구번호 (상품.id)가 같은지 비교해 찾은상품이라는 변수를 통하여 상품명, 가격 HTML 부분에 데이터바인딩함.
// 실제 개발할 땐 그냥 서버에 id : 0인 상품데이터를 find() 대신 Ajax로 요청하는 코드가 들어가고 ajax 요청을 성공하면 {} 중괄호 안에 상품데이터가 하나만 딱 들어감.

// 라우터 라이브러리 사용_ 1. import로 가져오고 2. 변수에 저장
import { useHistory, useParams } from 'react-router-dom';

function Detail(props){
  
  //[재고가 얼마 남지 않았습니다] UI 보이고/안보이고 상태 저장
  let [ alert, alert변경 ] = useState(true); 

  //Detail 페이지 방문 후 2초후에 [재고가 얼마 남지 않았습니다] 사라지게 -> alert state값 false로 변경
  useEffect(()=>{
    let 타이머 = setTimeout(()=>{ alert변경(false) }, 2000);
    //Detail컴포넌트 사라질 때 (2초가 되기도 전에 페이지 안보일 때) 즉시 특정코드 실행(Detail을 벗어나는 타이머 해제)
    //코드 길어지거나 꼬이면 남은 타이머 때문에 이상현상 발생 가능하기때문에 방지차원(버그 예방하는 에프킬라식 코딩)
    return ()=>{ clearTimeout(타이머) }
  },[]);

    let history = useHistory();
    
    //URL만들 땐 반복문은 안쓰고 URL 파라미터 문법을 이용해 축약 시켜줌
    let { id } = useParams();
    
    // 자료 순서 변경되어도 상세페이지 그대로 보여주는 방법
    let 찾은상품 = props.shoes.find(function(상품){
        return 상품.id === id
    });
    //let 찾은상품 = props.shoes.find(x => x.id == id);
    
  return (
    <div className="container">
      <div>
        <h1 className="red">Detail</h1>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">

            {/* 항상 0번째 상품 보이도록 하드코딩
            <h4 className="pt-5">{props.shoes[0].title}</h4>*/}

            {/* url 파라미터 문법 이용한 상세페이지 구현
            shoes[:id자리에 있던 숫자] 근데 이런 변수가 있는가? -> import useParams
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            */}

            {/* 자료 순서 변경되어도 상세페이지 그대로 보여주는 방법 data.js */}
            <h4 className="pt-5">상품명: {찾은상품.title}</h4>
            <p>상품설명: {찾은상품.content}</p>
            <p>가격: {찾은상품.price}원</p>

          <button className="btn btn-danger">주문하기</button> 
          {/* -----------history---------------
          goback() 함수 : 뒤로가기
            <button onClick={()=>{ history.goBack() }} className="btn btn-danger">뒤로가기</button> 
          push()함수: 특정경로로 이동하는 기능 구현 */}
          <button onClick={()=>{ history.push('/') }} className="btn btn-danger">뒤로가기</button>
        </div>
      </div>
       {/* [재고 얼마 남지 않았습니다 UI] if문 안되니까 삼항연산자로 state가 true일 때만 보여줌 */}
      {
        alert === true 
        ? (<div className="my-alert2"> 
            <p>재고가 얼마 남지 않았습니다</p> 
        </div>) 
        : null 
      }
      
  </div>  
  )
};

export default Detail;
//다른 파일에서 자유롭게 Detail 컴포넌트 가져다 쓸 수 있음.