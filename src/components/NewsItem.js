import React , { Component } from 'react';

export default class NewsItem extends Component {

    render(){
      
        let { title , description , urlToImage , url } = this.props;

      return(
        <div>
            <div className="card" style={{width: "18rem"}}>
            <img src={urlToImage} className='card-img-top' alt="image"></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description.substring(0,100)+"..."}</p>
                <a href={url} className="btn btn-sm btn-primary" target="_blank">Read News!</a>
            </div>
            </div>
            <br />
            <br />
        </div>
      )
    }
}