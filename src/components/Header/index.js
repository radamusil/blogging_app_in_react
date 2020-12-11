import React, {useContext} from 'react';
import './style.css';
import { TokenContext } from '../../App';
import CreateArticle from '../CreateArticle/index'
//import { useSelector } from 'react-redux';

const Header = (props) => {
    const token = useContext(TokenContext);

/*     const selectLoginToken = state => {
        return state.login.token;
    } */

    //const token = useSelector(selectLoginToken);

    return(
        <header className="header">
            <nav className="headerMenu">
                <a href="/">Logo</a>
                <a href="/">Recent Articles</a>
                <a href="#">About</a>
            </nav>
            <div>
                { token ? 
                <>
                <a href="/create_article">Create Article</a>
                <a href="/update_articles">Update Articles</a>
                <button onClick={props.handleLogout}>Logout</button>
                <div>User logged in</div>
                </> 
                : <a href="/login">Login</a> 
                }
            </div>
        </header>
    )
}

export default Header;