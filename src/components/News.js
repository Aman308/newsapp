import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
export class News extends Component {
 
  constructor(){
    super();
    this.state ={
      articles: [],
      loading: false,
      page:1
    } 
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=76b6aa7972734674afc86cf87c618c6f&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles , totalResults:parsedData.totalResults , loading: false})
  }

handlePrevClick = async() =>{
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=76b6aa7972734674afc86cf87c618c6f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
 this.setState({loading: true})
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);

  this.setState({
  page: this.state.page - 1,
  articles: parsedData.articles,
  loading: false
})
  }
  handleNextClick = async () =>{
    
    if(!( this.state.page + 1 > Math.ceil(this.state.totalResults
      /this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=76b6aa7972734674afc86cf87c618c6f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
     

      this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    })
  
  }
}

  render() {
    return (
      <div className="bg-dark text-light">
      <div className='container py-3'>
        <h2 className='text-center'>NewsX - Top headline</h2>
        {this.state.loading && < Spinner/>}
        <div className="row mx-2 bg-dark text-light">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col md-4 my-3 mx-3 bg-dark text-light"key={element.url}> 
           <NewsItem  title={element.title?element.title.slice(0, 45):""} description={element.description ? element.description.slice(0, 80):""} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
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
