import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
 let {title , description, imageUrl ,newsUrl,author,date , source} = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '85%' , zIndex: '1'}}>{source}</span>
  <img src={!imageUrl ? "https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_640.jpg":imageUrl}  className="card-img-top" alt="..."/>
  <div className="card-body bg-dark text-light border border-light">
    <h5 className="card-title">{title}...  </h5>
    <p className="card-text">{!description ? "Read the full news by clicking on read more below": description}...</p>
    <p className="card-text bg-primary rounded-2 py-1 px-2"><small className="text-body-white ">By {author? author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem

