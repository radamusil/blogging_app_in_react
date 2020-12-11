
import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import ArticlePreview from '../../components/ArticlePreview';
import { TokenContext } from '../../App';

const ArticleList = (props) => {
    const token = useContext(TokenContext);
    const [articles, setArticles] = useState(null);

    //console.log(token);

    const getArticles = async () => {
    const response = await axios.get('https://fullstack.exercise.applifting.cz/articles', {
        headers: {
          'X-API-KEY': '82738e38-0e14-47dd-925e-8b803fabb0ff',
          
        }},);
        const data = response.data;

        setArticles(data);

        //console.log(data);
    }
    console.log(articles);
    useEffect(() => {
        getArticles();
    }, []);
    
    return (
        <div>
             {articles ? articles.items.map((article, index) => (
            <ArticlePreview key= {index} article = {article} />
            )) :
             <div>Loading</div>
        } 
        </div>
        );
}

export default ArticleList;