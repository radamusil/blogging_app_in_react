import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { TokenContext } from '../../App';
import DisplayImg from '../DisplayImg'
import CreateComment from '../CreateComment'
import DisplayComment from '../DisplayComment'
import './style.css';
import { Redirect } from 'react-router-dom';


const ArticleDetail = (props) => {
    const { id } = useParams();
    const token = useContext(TokenContext);
    const [redirect, setRedirect] = useState(null);
    const [article, setArticle] = useState(null);


    const getArticle = async () => {
        const response = await axios.get('https://fullstack.exercise.applifting.cz/articles/' + id, {
        headers: {
          'X-API-KEY': '82738e38-0e14-47dd-925e-8b803fabb0ff',
          /* 'Authorization': token */
        }},);
        const data = response.data;

        setArticle(data);
        //console.log(data);
    }

    useEffect(() => {
        getArticle();
    }, []);

    if (redirect) {
        return (
            <Redirect to={ redirect } />
        )
    } 

    return (
        <div>
        {article ? 
        <div className="articleholder">
        <article>
            <h1>{article.title}</h1>
            <DisplayImg article={ article } />
            <p>{article.content}</p>
        </article>
        <hr/>
        <h3>Comments:</h3>
        {article.comments.map((comment, index) => (
            <DisplayComment key= {index} comment = {comment} />
            ))}
        <CreateComment article={ article } setRedirect={setRedirect}/>
        </div> :
       <p>Loading...</p>
        }
        </div>
    )
}

export default ArticleDetail;