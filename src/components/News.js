import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
    static defaultProps = {
        Country: "in",
        pageSize: 8,
        category: "general",
        apiKey: "3f54594560e74388b45e1b0c4f659b76"
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number,
        apiKey: PropTypes.string
    }
    articles = []
    constructor() {
        super();
        console.log("Helllo i am constructor you mf");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: 0
        }
    }
    async updateNews() {
        this.props.setProgress(10);
        console.log("Helllo i am componentDidMount you mf");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(70);
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        })
        console.log("Helllo i am componentDidMount you mf");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalArticles: parsedData.totalResults })
    }

    capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || ""
    render() {
        return (
            <div className="wer">
                <div className="container my-6">
                    <h2 className="text-center" style={{ margin: '10 0px 100 px' }}>NewsStar - Top Headlines from {this.capitalize(this.props.category)} Category</h2>
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length < this.state.totalArticles}
                        loader={<Loading />}>
                        <div className="container">
                            <div className="row">
                                {!this.state.loading && this.state.articles.map((element) => {
                                    return <div className="col-md-3" key={element.url}>
                                        <NewsItem title={element.title?.slice(0, 88) + ".."} description={element.description?.slice(0, 90) + ".."} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                    <div className='qwe'></div>
                </div>
                <footer>	&copy; NewsStar Corp. 2021-2023 </footer>
            </div>
        )
    }
}

export default News