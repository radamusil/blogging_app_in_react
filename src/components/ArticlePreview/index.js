import React from 'react';



const ArticlePreview = (props) => {

    
    return (
        <article>
            <h2>{props.article.title}</h2>
            <p>{props.article.perex}</p>
            <a href={'/article_detail/' + props.article.articleId }>Read more...</a> 
        </article>
        );
}

export default ArticlePreview;