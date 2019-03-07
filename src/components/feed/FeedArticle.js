import React, {PureComponent} from 'react';
function createMarkup(html) {
    return {__html: html};
}

function ArticleComponent(html) {
    return <div className="article-content"
                dangerouslySetInnerHTML={createMarkup(
                    html.content)}></div>;
}

export default class Article extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let article = this.props.article;
        return <div key={article.guid} className="article">
            <div className="article-title">
                {article.title}&nbsp;-&nbsp;<span
                className="date">
                                    {article.pubDate}
                                </span>
            </div>

            <ArticleComponent
                content={article.description} />
        </div>;
    }
}