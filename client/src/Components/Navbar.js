import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';



const NavBar = props => {
    const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);

    const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
            };
        });
    }

    const unauthenticatedNavBar = () => {
        return (
            <>
                <Link to="/">
                    <li className="nav-item nav-link"> Home </li>
                </Link>
                <Link to="/login">
                    <li className="nav-item nav-link"> Login </li>
                </Link>
                <Link to="/register">
                    <li className="nav-item nav-link"> Register </li>
                </Link>
            </>
        )
    }
    const authenticatedNavBar = () => {
        return (
            <>
                <Link to="/">
                    <li className="nav-item nav-link"> Home </li>
                </Link>
                <Link to="/newreview">
                    <li className="nav-item nav-link"> New Review </li>
                </Link>
                {
                    user.role === "admin" ? <Link to="/admin"><li className="nav-item nav-link"> Admin </li></Link> : null
                }
                <button type="button" className="btn btn-link nav-item nav-link" onClick={ onClickLogoutHandler }> Logout </button>        
            </>
        )
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
                <div className="navbar-brand">Skybeat</div>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <a href="https://github.com/TheResinger/SkybeatReact"><FontAwesomeIcon icon={faGithubSquare} size="2x" color="black"></FontAwesomeIcon></a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;