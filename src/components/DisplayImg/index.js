import React, { useEffect, useContext, useState} from 'react';
import axios from 'axios';
import { TokenContext } from '../../App';

const DisplayImg = (props) => {
    const token = useContext(TokenContext);
    const imageId = props.article.imageId;
    const [imageData, setimageData] = useState('');

    const getImage = async () => {
        console.log(imageId);
        const response = await axios.get('https://fullstack.exercise.applifting.cz/images/' + imageId , {
            headers: {
            'X-API-KEY': '82738e38-0e14-47dd-925e-8b803fabb0ff',
            'Authorization': token
            }, responseType: 'blob',},)
            const data = response.data;

            setimageData(data);
            console.log(data);

        }
        useEffect(() => {
            getImage();
            //console.log(imageData);
        }, []);

        if (imageData){
        const objectURL = URL.createObjectURL(imageData);
        return(<img src={objectURL} />);
        } else{
        return('Loading');}
    
        
}

export default DisplayImg;