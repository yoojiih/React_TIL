import React from 'react'
import background from'./background.jpeg' //import 내부에 해당 default 모듈이 이미 존재하기 때문에 import icon from './images/icon.png' ... <img src={icon}/>이런식으로 사용
import { Card } from 'react-bootstrap'; 
function CardPage() {
    return (
        <div>
            {/* -----------------card---------------------
            (이미지는 src폴더에-> src에 데이터 바인딩 시 src=" " 대신 src={} 
            데이터 바인딩 {변수명 or 함수} js데이터를 html에 꽂아넣음 <h3>{ 글제목 }</h3> 
            */}
            <Card className="bg-dark text-white">
                <Card.Img src={background} alt="Card image" size="large"/>
                <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    React | Redux | Node js | MySQL | PWA | Ajax | express | Javascript | CSS | SCSS | html 
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card> 
        </div>
    )
}

export default CardPage
    