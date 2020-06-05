import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Spinner from '../images/Spinner'
import styled from 'styled-components'

function Article({match}) {
  const [article, setArticle] = useState('')

  const fetchArticle = () => {
    axios.get(`/articles/${match.params.id}`)
    .then(res => setArticle(res.data))
    .catch(error => console.log(error))
  }
  useEffect(() => {
    fetchArticle()
  }, [])

  return (
    <ArticleContainer >
    {article ?
      (<div className="container bg-light mt-5 p-2">
        <h1>{article.title}</h1>
        <hr />
        <h4 className="text-muted text-break text-justify">{article.article}</h4>
        <h5 className="text-dark font-italic font-weight-bold"> - Author: {article.authorname}</h5>
        <hr/>
        <h6 className="mt-2">Created at: {article.createdAt.slice(11,19) +' Date: '+ article.createdAt.slice(0,10)}</h6>
        <h6 className="mb-3">Updated at: {article.updatedAt.slice(11,19) +' Date: '+ article.updatedAt.slice(0,10)}</h6>
        <Link to="/" type="button" className="btn btn-primary px-5">Back</Link>
    </div>) : <Spinner />
    }
    </ArticleContainer>
  )
}
export default  Article

const ArticleContainer = styled.div`
  margin: 5rem 0; 
`