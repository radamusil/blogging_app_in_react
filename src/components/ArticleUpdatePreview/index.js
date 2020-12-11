import React from 'react';
import ArticleDelete from '../ArticleDelete/index'



const ArticleUpdatePreview = (props) => {

    
    return (
        <article>
            <h2>{props.article.title}</h2>
            <a href={'/article_detail/' + props.article.articleId + '/update' }>Update</a> 
            <ArticleDelete article={props.article}/>
        </article>
        );
}

export default ArticleUpdatePreview;