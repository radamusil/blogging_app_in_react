import React, { useContext, useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { TokenContext } from '../../App';
import UploadImage from '../UploadImage';

const CreateArticle = (props) => {
    const [title, setTitle] = useState('');
    const [perex, setPerex] = useState('');
    const [content, setContent] = useState('');
    const [imageId, setImageId] = useState('');
    const token = useContext(TokenContext);
    const [imageStatus, setImageStatus] = useState(false);
    const [redirect, setRedirect] = useState(null);

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
        article.imageId = imageId;
        

        //console.log(article);
        const response = await axios.post('https://fullstack.exercise.applifting.cz/articles', article, {
            headers: {
              'X-API-KEY': '82738e38-0e14-47dd-925e-8b803fabb0ff',
              'Authorization': token
            }},);

            setRedirect('/');
    }

        if (redirect) {
            return (
                <Redirect to={ redirect } />
            )
        } 
/*     if (token ) {
        console.log(token); */
        return (
            <>
            <UploadImage setImageStatus={setImageStatus} setImageId={ setImageId }/>
            <form onSubmit={handleSubmit}>
                <div className="form_element">

                        <input type="text" placeholder="Title" name="title" value={title} onChange={ handleTitleChange }/>

                </div>
                <div className="form_element">

                        <textarea type="text" placeholder="Perex" name="perex" value={perex} onChange={ handlePerexChange } rows="4" cols="50"/>

                </div>
                <div className="form_element">

                        <textarea type="text" placeholder="Content" name="content" value={content} onChange={ handleContentChange } rows="10" cols="50"/>

                </div>
                <button>Create Article</button>
            </form>
            </>
        )/*}  else {
            console.log(token);
            setRedirect('/');
        } */
}

export default CreateArticle;