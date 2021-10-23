import React from 'react'

function Product() {
    return (
        <div>
            
        </div>
    )
}

export default Product

// import React, { useState } from 'react'; 
// import { Route } from 'react-router-dom';
// //import & export 
////상품 데이터 스키마 (data.js 파일) 상품정보를 object {} 자료형에 담아 3개를 하나의 array에 담아 export default 했기때문에 자유 작명 가능

// import Data from '../../data';
// import Detail from '../Detail';

// function Product() {

//     let [shoes, shoes변경] = useState(Data); //data.js 파일 export default로 내보낸 데이터 불러들임

//     return (
//         <div>
//             <div className="container">
//                 <div className="row">
//                     {/* ---- 상품들 하드코딩-----
//                     <div className="col-md-4">
//                         <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
//                         <h4>{ shoes[0].title }</h4>
//                         <p>{ shoes[0].content } & { shoes[0].price }</p>
//                     </div>
//                     .... 
//                     */}
//                     {/*------------<map 문법>--------------
//                     중괄호내에선 쓰이지 못하는 반복문 기능 구현을 위한 js 내장함수
//                     기존 array자료형 변형시켜 새array 만들어 array내 모든 자료에 똑같은 작업 하나씩 시켜줄 때 쓰임
//                     1. 자료.map(()=>{}) 소괄호 내 콜백함수 하나 넣고 파라미터로 a 입력시 array 안에 있던 모든 data를 하나씩 꺼냄
//                     2. return(반복시킬HTML) *반복시킨 HTML에는 key={}이게 필요
//                         리액트는 이런식으로 반복문 돌린 HTML 요소엔 key={}속성 적는 걸 권장
//                     */}
//                     {/* 컴포넌트화를 위한 데이터 바인딩 + map 
//                         [props 전송법]
//                         1. <자식컴포넌트 보낼이름={전송할state}/>
//                         2. function 자식컴포넌트(props){}
//                         3. props.보낼이름 사용
//                     */}
//                     { 
//                     shoes.map((a,i)=>{
//                         return <Com shoes={shoes[i]} i={i} key={i}/>
//                     })
//                     }
//                 </div>

//                 {/* 서버에 ajax 요청해서 상품데이터 3개를 더 가져오기 */}
//                 <button className="btn btn-primary">더보기</button> 
//                 </div> 

//             {/* ================URL 파라미터 문법===========================  
//                 <Route path="/detail/0"> -> /detail/0에 접속시 0번째 상품
//                 path에 :(콜론)기호 -> / 뒤에 아무 문자나 넣어도 Detail컴포넌트 보이게함
//                 'id' 부분은 마음대로 작명가능 & 여러개 사용 가능 /detail/:id/:id2*/}
//                 <Route path="/detail/:id">  
//                 {/* <div>상세페이지</div> */}
//                 <Detail shoes={shoes}/>
//                 </Route>
//         </div>
//     )
// }
// function Com(props){
//     return (
//         <div className="col-md-4">
//         {/* 텍스트 중간에 변수를 넣고 싶으면 '문자'+변수+'문자'*/}
//                 <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg' } width="100%"/>
//         <h4>{ props.shoes.title }</h4>
//         <p>{ props.shoes.content } & { props.shoes.price }</p>
//         </div>  
//     )
// }

// export default Product
