import React, {useContext} from 'react';
import axios from 'axios';
import { TokenContext } from '../../App';


const DisplayComment = (props) => {
    const token = useContext(TokenContext);
    const comment=props.comment;

    console.log(comment);

    const handleUp = async () => {
        const response = await axios.post('https://fullstack.exercise.applifting.cz/comments/' + comment.commentId + '/vote/up', 1, {
            headers: {
              'X-API-KEY': '82738e38-0e14-47dd-925e-8b803fabb0ff',
              'Authorization': token
            }},);
    }

    const handleDown = async () => {
        const response = await axios.post('https://fullstack.exercise.applifting.cz/comments/' + comment.commentId + '/vote/down', -1, {
            headers: {
              'X-API-KEY': '82738e38-0e14-47dd-925e-8b803fabb0ff',
              'Authorization': token
            }},);
    }


    return(
        <div className="comment">
            <h3>{comment.author}</h3>
            <p>{comment.content}</p>
            <div className="rating">
            <p>Score: {comment.score}</p>
            <button onClick={handleUp}>+</button>
            <button onClick={handleDown}>-</button>
            </div>
            <hr/>

        </div>
    )

}

export default DisplayComment