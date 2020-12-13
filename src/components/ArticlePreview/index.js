import React from 'react';
import DisplayImg from '../DisplayImg';
import './style.css';



const ArticlePreview = (props) => {

    
    return (
        <article className="preview">
            <DisplayImg article={ props.article } />
            <div>
                <h2>{props.article.title}</h2>
                <p>{props.article.perex}</p>
                <a href={'/article_detail/' + props.article.articleId }>Read more...</a> 
            </div>
        </article>
        );
}

export default ArticlePreview;