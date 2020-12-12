import React, { useContext, useState } from 'react';
import axios from 'axios';
import { TokenContext } from '../../App';

const UploadImage = (props) => {
    const [image, setImage] = useState([])
    const token = useContext(TokenContext);

    const handleFileChange = (event) => {
        setImage(event.target.files[0]);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let articleImage = new FormData();

        articleImage.append('image', image, image.name);
        let data ={};
        axios.post('https://fullstack.exercise.applifting.cz/images', articleImage, {
            headers: {
              'X-API-KEY': '82738e38-0e14-47dd-925e-8b803fabb0ff',
              'Authorization': token
            }},).then(res => {
                //console.log(res.data[0]);
                data = res.data[0];
                props.setImageId(data.imageId);
                props.setImageStatus(true);
            } );

        
        
        


        //props.setImageId = response.data.imageId;
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label>
                <input type="file" name="file" onChange={ handleFileChange }/>
            </label>
            <button onClick={ handleSubmit }>Upload image</button>
        </form>
    )
}

export default UploadImage