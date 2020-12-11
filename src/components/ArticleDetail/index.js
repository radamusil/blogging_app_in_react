import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { TokenContext } from '../../App';


const ArticleDetail = (props) => {
    const { id } = useParams();
    const token = useContext(TokenContext);

    const [article, setArticle] = useState(null);

    const getArticle = async () => {
        const response = await axios.get('https://fullstack.exercise.applifting.cz/articles/' + id, {
        headers: {
          'X-API-KEY': '82738e38-0e14-47dd-925e-8b803fabb0ff',
          'Authorization': token
        }},);
        const data = response.data;

        setArticle(data);
        console.log(data);
    }

    useEffect(() => {
        getArticle();
    }, []);

    return (
        <div>
        {article ? 
        <article>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </article> :
       <p>Loading...</p>
        }
        </div>
    )
}

export default ArticleDetail;