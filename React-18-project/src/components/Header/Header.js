import './Header.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doLogout } from '../../redux/action/accountAction';
import Home from '../Home/Home';

const Header = () => {
    const user = useSelector(state => state.account.userInfo);
    const dispatch = useDispatch();
    const handleLogin = () => {
        // redicrect to SSO
        //http://localhost:8080/login?serviceURL=http://localhost:3000/
        window.location.href = `${process.env.REACT_APP_BACKEND_SSO_LOGIN}?serviceURL=${process.env.REACT_APP_SERVICE_URL}`;
    }

    const handleSignUp = () => {
        // redicrect to SSO
        //http://localhost:8080/signup?serviceURL=http://localhost:3000/
        window.location.href = `${process.env.REACT_APP_BACKEND_SSO_SIGNUP}?serviceURL=${process.env.REACT_APP_SERVICE_URL}`;
    }

    const handleLogout = () => {
        dispatch(doLogout());
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/"><img src="/logoBK.png" alt="Logo" className="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/Home" className="nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </Nav>           

                        <Nav>
                            <div className="dropdown-wrapper">
                                {user && user.access_token ? (
                                    <NavDropdown title={user.email} id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={() => handleLogout()}>Log out</NavDropdown.Item>
                                    </NavDropdown>
                                ) : (
                                    <NavDropdown title="Setting" id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={() => handleLogin()}>Log in</NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => handleSignUp()}>Sign up</NavDropdown.Item>
                                    </NavDropdown>
                                )}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}


export default Header;