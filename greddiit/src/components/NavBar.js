import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
    const navigate = useNavigate()
    // navigate("/profile")
    const logStat = (window.localStorage.getItem("login-status") === "true")
    // console.log(logStat, typeof logStat, typeof window.localStorage.getItem("login-status"))
    
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                        src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="reddit-logo"
                    />{" "}
                    greddiit
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="justify-content-end me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex me-auto">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-danger">Search</Button>
                    </Form>

                    {logStat && <Nav
                        className="justify-content-end me-0 my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {/* <Nav.Link onClick={() => { navigate("/link-1") }}>Link 1</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/link-2") }}>Link 2</Nav.Link> */}
                        <NavDropdown title=<img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="profile-logo" /> id="navbarScrollingDropdown" align={{sm:'end'}}>
                            <NavDropdown.Item onClick={() => { navigate("/profile") }}>Profile</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#">My Subgreddiits</NavDropdown.Item> */}
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={props.logOut}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}