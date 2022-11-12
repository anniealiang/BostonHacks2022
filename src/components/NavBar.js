import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = () => {
    return(
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img scr={''} alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                <Nav.Link href="#website1">Website1</Nav.Link>
                <Nav.Link href="#website2">#website2</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
