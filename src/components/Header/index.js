import React, {useContext} from 'react';
import './style.css';
import { TokenContext } from '../../App';
import logo from './logo.png'



const Header = (props) => {
    const token = useContext(TokenContext);


    return(
        <div className="holder">
            <header className="header">
                <nav className="headerMenu">
                    <a href="/"><img src={logo} alt="logo"/></a>
                    <a href="/">Recent Articles</a>
                    {/* <a href="#">About</a> */}
                </nav>
                <div>
                    { token ? 
                    <nav className="headerMenu">
                        <a href="/create_article">Create Article</a>
                        <a href="/update_articles">Update Articles</a>
                        <button onClick={props.handleLogout}>Logout</button>
                    </nav>
                    :
                    <nav className="headerMenu">
                        <a href="/login">Login</a> 
                    </nav> 
                    }
                </div>
            </header>
        </div>
    )
}

export default Header;