import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
 let {title , description, imageUrl ,newsUrl} = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl ? "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_640.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body bg-dark text-light border border-light">
    <h5 className="card-title">{title}... </h5>
    <p className="card-text">{!description ? "Read the full news by clicking on read more below": description}...</p>
    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
