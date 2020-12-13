import React from 'react';
import ArticleList from '../ArticleList';
import './style.css';


const Home = (props) => {
    return (
        <div>
            <h1>Recent articles</h1>

            <ArticleList />
        </div>
        );
}

export default Home;