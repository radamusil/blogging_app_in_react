import React, {useEffect, useContext, useState} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { TokenContext } from '../../App';
import DisplayImg from '../DisplayImg';
import UploadImage from '../UploadImage';
import { Redirect } from 'react-router-dom';


const ArticleUpdate = (props) => {
    const [title, setTitle] = useState('');
    const [perex, setPerex] = useState('');
    const [content, setContent] = useState('');
    const [imageStatus, setImageStatus] = useState(true);
    const token = useContext(TokenContext);
    const { id } = useParams();
    const [imageId, setImageId] = useState('');
    const [redirect, setRedirect] = useState(null);
    const [article, setArticle] = useState(null);

    const getArticle = async () => {
        const response = await axios.get('https://fullstack.exercise.applifting.cz/articles/' + id, {
        headers: {
          'X-API-KEY': '82738e38-0e14-47dd-925e-8b803fabb0ff',
          'Authorization': token
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



    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handlePerexChange = (event) => {
        setPerex(event.target.value);
    }

    const handleContentChange = (event) => {
        setContent(event.target.value);
    }

    if (article) {
    if (title === ''){
        setTitle(article.title);
    };
    if (perex === ''){
        setPerex(article.perex);
    };
    if (content === ''){
        setContent(article.content);
    };
    if (imageId === ''){
        setImageId(article.imageId);
    };
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        let article1 = {};
        
        article1.title= title;
        article1.perex= perex;
        article1.content= content;
        article1.imageId = imageId;
        
        const response = await axios.patch('https://fullstack.exercise.applifting.cz/articles/' + id, article, {
            headers: {
              'X-API-KEY': '82738e38-0e14-47dd-925e-8b803fabb0ff',
              'Authorization': token
            }},);

        setRedirect('/article_detail/' + article.articleId)
    }

    const handleImgDelete = async () => {
        const response = await axios.delete('https://fullstack.exercise.applifting.cz/images/' + article.imageId, {
        headers: {
          'X-API-KEY': '82738e38-0e14-47dd-925e-8b803fabb0ff',
          'Authorization': token
        }},);

        setImageStatus(false);

    }



    return (
        <div>
        {article ?
        <div>
        { imageStatus === true ?
        <>
            <DisplayImg article={ article }/>
            <button onClick={handleImgDelete}>Delete Image</button>
        </> : 
        <div>
            <UploadImage setImageId={ setImageId } setImageStatus={setImageStatus} />
        </div>
        }
        <form onSubmit={handleSubmit}>
            <div className="form_element">

                    <input type="text" name="title" defaultValue={article.title} onChange={ handleTitleChange }/>

            </div>
            <div className="form_element">

                    <textarea type="text" name="perex" defaultValue={article.perex} onChange={ handlePerexChange } rows="4" cols="50"/>
                
            </div>
            <div className="form_element">

                    <textarea type="text" name="content" defaultValue={article.content} onChange={ handleContentChange } rows="10" cols="50"/>
                
            </div>
            <button>Update Article</button>
        </form>
        </div>
         :
        <div>Loading..</div> }
        </div>
    )
}

export default ArticleUpdate;