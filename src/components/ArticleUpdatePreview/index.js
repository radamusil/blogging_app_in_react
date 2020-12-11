import React from 'react';



const ArticleUpdatePreview = (props) => {

    
    return (
        <article>
            <h2>{props.article.title}</h2>
            <a href={'/article_detail/' + props.article.articleId + '/update' }>Update</a> 
        </article>
        );
}

export default ArticleUpdatePreview;