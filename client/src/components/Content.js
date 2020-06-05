import React from 'react'
import {Link} from 'react-router-dom'
import Spinner from '../images/Spinner'
import styled from 'styled-components'

function Content({data, deleteArticle}) {

  if(!data.length){
    return(
      <Spinner />
    )
  }
  return (
    <ContentContainer>
      <div className="container">
      {data.map((item) => {
        return(       
          <div className="container mb-4" key={item._id} >
            <Link to={`article/${item._id}`}>
              <h1 className="">{item.title}</h1>
            </Link>
            <h4 className="text-muted text-break text-justify">{item.article}</h4>
            <h5 className="text-dark font-italic font-weight-bold"> - Author: {item.authorname}</h5>
            <h6 className="py-1 mt-2">Created at: {item.createdAt.slice(11,19) +' Date: '+ item.createdAt.slice(0,10)}</h6>
            <Link to={`update/${item._id}`} type="button" className="btn btn-outline-success">Edit Article</Link>
            <button onClick = {() => deleteArticle(item._id)} type="button" className="btn btn-outline-danger ml-5">Delete Article</button>
            <hr/>
          </div>
        )
      })}
      </div>
    </ContentContainer>
  )
}

export default Content

const ContentContainer = styled.div`
  margin: 5rem 0; 
`