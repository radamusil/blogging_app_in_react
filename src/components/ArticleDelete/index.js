import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import { TokenContext } from '../../App';


const ArticleDelete = (props) => {
    const token = useContext(TokenContext);
    const id  = props.article.articleId;

    const handleDelete = () => {
        const response = axios.delete('https://fullstack.exercise.applifting.cz/articles/' + id, {
            headers: {
              'X-API-KEY': '82738e38-0e14-47dd-925e-8b803fabb0ff',
              'Authorization': token
            }},);
    }

    return (
        <button onClick={ handleDelete }>Delete</button>
    )
}

export default ArticleDelete;