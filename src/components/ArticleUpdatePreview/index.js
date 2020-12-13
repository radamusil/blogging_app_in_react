import React from 'react';
import ArticleDelete from '../ArticleDelete/index';
import './style.css';



const ArticleUpdatePreview = (props) => {

    
    return (
        <article className="update_preview">
            <h2>{props.article.title}</h2>
            <div>
            <a href={'/article_detail/' + props.article.articleId + '/update' }>Update</a> 
            <ArticleDelete article={props.article}/>
            </div>
        </article>
        );
}

export default ArticleUpdatePreview;