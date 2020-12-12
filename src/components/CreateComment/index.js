import React, { useContext, useState} from 'react';
import axios from 'axios';
import { TokenContext } from '../../App';

const CreateComment = (props) => {
    const token = useContext(TokenContext);
    const articleId = props.article.articleId;
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    }

    const handleContentChange = (event) => {
        setContent(event.target.value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        let comment = {};
        
        comment.author= author;
        comment.content= content;
        comment.articleId= articleId;


        const response = await axios.post('https://fullstack.exercise.applifting.cz/comments', comment, {
            headers: {
              'X-API-KEY': '82738e38-0e14-47dd-925e-8b803fabb0ff',
              'Authorization': token
            }},);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="form_element">
                <label>
                    Name
                    <input type="text" name="author" value={author} onChange={ handleAuthorChange }/>
                </label>
            </div>
            <div className="form_element">
                <label>
                    Comment
                    <textarea type="text" name="content" value={content} onChange={ handleContentChange } rows="4" cols="50"/>
                </label>
            </div>
            <button>Send Comment</button>
        </form>
        </>
    )
}

export default CreateComment;
