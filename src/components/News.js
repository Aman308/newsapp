import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

import PropTypes from 'prop-types'

export class News extends Component {
  
  static defaultProps = {
    country : 'us',
    pageSize : 6,
    category : 'general'
  }
  static propTypes = {
    country : PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(){
    super();
    this.state ={
      articles: [],
      loading: false,
      page:1
    } 
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76b6aa7972734674afc86cf87c618c6f&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles , totalResults:parsedData.totalResults , loading: false})
  
  }

  async componentDidMount(){
    this.updateNews();
  }

handlePrevClick = async() =>{
  this.setState({page: this.state.page - 1});
  this.updateNews();
  }
  handleNextClick = async () =>{
  this.setState({page: this.state.page + 1});
  this.updateNews();
}

  render() {
    return (
      <div className="bg-dark text-light">
      <div className='container py-3'>
        <h2 className='text-center'>NewsX - Top headline</h2>
        {this.state.loading && < Spinner/>}
        <div className="row mx-2 bg-dark text-light">
        {this.state.loading && this.state.articles.map((element)=>{
          return <div className="col md-4 my-3 mx-3 bg-dark text-light"key={element.url}> 
           <NewsItem  title={element.title?element.title.slice(0, 45):""} description={element.description ? element.description.slice(0, 80):""} imageUrl = {element.urlToImage} newsUrl = {element.url} author={element.author} date={element.publishedAt} source = {element.source.name}/>
           </div>
        })}
       
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark my-3 mx-3 border border-light"onClick={this.handlePrevClick}> 
          &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults
      /this.props.pageSize)} type="button" className="btn btn-dark my-3 mx-3 border border-light" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
      </div>
    )
  }
}

export default News
