import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';
import Interweave from 'interweave';
import { UrlMatcher, HashtagMatcher } from 'interweave-autolink';
import URLInput from './url-list/URLInput';
/*
 * RSS feed API
 Sample feeds: https://api.rss2json.com/v1/api.json?rss_url=http://sukhmanisakhi.com/feed/ https://api.rss2json.com/v1/api.json?rss_url=https://aws.amazon.com/blogs/big-data/feed/
 * */
const url = 'https://api.rss2json.com/v1/api.json?rss_url=http://sukhmanisakhi.com/feed/';
// const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://aws.amazon.com/blogs/big-data/feed/';
function createMarkup(html) {
    return {__html: html};
}

function ArticleComponent(html) {
    return <div className="article-content"
                dangerouslySetInnerHTML={createMarkup(
                    html.content)}></div>;
}

function cleanHTML(html) {
    var root = document.implementation.createHTMLDocument().body;

    root.innerHTML = html;

    //Manipulate the DOM here
    // $(root).find("script, style, img").remove(); //jQuery is not relevant, I just didn't want to write exhausting boilerplate code just to make a point
// console.log(root.innerHTML);
    return root.innerHTML;
}

class Dashboard extends Component {
    state = {
        feedTitle: '',
        articles: [],
    };

    componentDidMount() {
        fetch(url).then(response => response.json()).then(articles => {
            console.log(articles);
            this.setState({
                feedTitle: articles.feed.title,
                articles: articles.items,
            });
            // this.setState({
            //     newsItems: [...this.state.newsItems, ...articles],
            // });
        }).catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <div className="left-sidebar">
                    URL LISt
                    <URLInput />
                </div>
                <div className="container">
                    Articles
                    <p>{this.state.feedTitle}</p>
                    {
                        this.state.articles.length > 0
                            ? this.state.articles.map((article) => {
                            // console.log()
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
                            return <div style={{
                                'border': 'solid 1px black',
                                marginTop: '10px',
                            }}><Interweave key={article.guid}
                                           content={article.description}
                                           matchers={[
                                               new UrlMatcher('url'),
                                               new HashtagMatcher('hashtag')]}

                            /></div>;
                            // return <h1>{cleanHTML(article.content)}</h1>
                        })
                            : null
                    }
                </div>
            </div>
        );
    }
}

export default Dashboard;
