/* eslint-disable */
//warning message 차단

//컴포넌트 생성하는 코드를 담으려면 맨 위에 항상 import React를 해야함.
import React from 'react';

import './App.css'
import { Route, Switch } from 'react-router-dom';
import Cart from './components/Cart.js';
import Detail from './components/Detail.js';
import NavBar from "./components/NavbarPage";
import Card from "./components/CardPage";
import Product from "./components/StateLearn/Product";
import StateLearn from "./components/StateLearn/StateLearn";

//?import Table: export default로 내보낸 데이터 가져오기 -> import 변수명 from '경로';  변수명부분 자유롭게 작명가능!
//?import {Table} : Table 이라는 변수/함수 가져오기  ->export{} 했던 변수명 그대로 써야함

function App(){

  return (    
    <div className="App">
        <NavBar />
  
  {/* ================switch & router=================== 
  한번에 하나의 <Route>만 보여주고 싶을땐 <Switch> 태그로 감쌈 = 중복 허용 안함, 중복되면 맨 위에것만!*/}
        <Switch>          
          <Route exact path="/" component={Card} /> {/* 브라우저 주소창에 /으로 접속시 뜨는 부분 */}
          <Route exact path="/cart" component={Cart} />  {/* <Route path="/cart"> <Cart></Cart> </Route> */}
          <Route exact path="/detail/:id" component={Detail} />
          {/* <Route path="/detail/:id"> <Detail shoes={shoes}/> </Route>  */}
          <Route exact path="/product" component={Product} />
          <Route exact path="/state" component={StateLearn} />
        </Switch>
    </div>
  )
}
// StateLearn.js -> useState React Hook
// Detail.js -> useHistory React Hook

export default App;
//App 이라는 함수를 export 
//다른 파일에서 자유롭게 App 컴포넌트 가져다 쓸 수 있음.
// index.js 파일에선 import 자유작명 from './App.js';