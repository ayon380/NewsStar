import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card" >
                    <img src={!imageUrl ? "https://www.gannett-cdn.com/presto/2023/01/13/PLSJ/30d5f01a-0eea-4728-b1f4-273d9bc041bf-toi700e_art.jpg?auto=webp&crop=4778,2688,x21,y0&format=pjpg&width=1200" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '40px', zIndex: '1' }}> {source}
                        </span>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read More..</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem