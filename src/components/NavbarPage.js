import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

function NavbarPage() {
    return (
        <div className="black-nav">
            {/* bootstrap 라이브러리
            1. react bootstrap 사이트 -> get started -> npm install react-bo... 복사 -> 터미널에 붙여넣기
            2. 스크롤 내리면 나오는 CSS부분 <link rel …../> 복사 -> public폴더 index.html <head> 태그 안에 붙여넣기
            3. button검색후 원하는 거 복사
            4. 쓰고자하는 js 파일안(App.js)에 붙여넣기 
            5. 확인 -> npm run start*/}
            {/* ================Navbar=================== */}
            <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="/">YooJiHyeon</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link><Link to="/" style={{ margin: '20px', color: 'black', textDecoration: 'none'}}>Home</Link></Nav.Link>
                <Nav.Link><Link to="/detail" style={{ margin: '20px', color: 'black', textDecoration: 'none'}}>Detail</Link></Nav.Link>
                <Nav.Link><Link to="/product" style={{ margin: '20px', color: 'black', textDecoration: 'none'}}>Products</Link></Nav.Link>
                <Nav.Link><Link to="/state" style={{ margin: '20px', color: 'black', textDecoration: 'none'}}>StateLearn</Link></Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavbarPage
