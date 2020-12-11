import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import { TokenContext } from '../../App';

const CreateArticle = (props) => {
    const [title, setTitle] = useState('');
    const [perex, setPerex] = useState('');
    const [content, setContent] = useState('');
    const token = useContext(TokenContext);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handlePerexChange = (event) => {
        setPerex(event.target.value);
    }

    const handleContentChange = (event) => {
        setContent(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let article = {};
        
        article.title= title;
        article.perex= perex;
        article.content= content;
        //article.append('imageId', imageId);
        const response = await axios.post('https://fullstack.exercise.applifting.cz/articles', article, {
            headers: {
              'X-API-KEY': '82738e38-0e14-47dd-925e-8b803fabb0ff',
              'Authorization': token
            }},);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form_element">
                <label>
                    Title
                    <input type="text" name="title" value={title} onChange={ handleTitleChange }/>
                </label>
            </div>
            <div className="form_element">
                <label>
                    Perex
                    <textarea type="text" name="perex" value={perex} onChange={ handlePerexChange } rows="4" cols="50"/>
                </label>
            </div>
            <div className="form_element">
                <label>
                    Content
                    <textarea type="text" name="content" value={content} onChange={ handleContentChange } rows="10" cols="50"/>
                </label>
            </div>
            <button>Create Article</button>
        </form>
    )
}

export default CreateArticle;