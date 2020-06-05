import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

function Update({match, setToggle, toggle}) {
  const [updatePost, setUpdatePost] = useState(
    {
      title: '',
      article: '',
      authorname: '',
      //time: new Date().toTimeString().slice(0,8),
    }
  )
  const [message, setMessage] = useState('')

  const fetchData = () => {
    axios.get(`/articles/${match.params.id}`)
    .then(res => setUpdatePost(res.data))
    .catch(error => console.log(error))
  }
  useEffect(() => {
    fetchData()
  }, [])

  const submitForm = e => {
    e.preventDefault()
    axios.put(`/articles/update/${match.params.id}`, updatePost)
      .then(res => {
          setMessage(res.data)
          setToggle(!toggle)
      })
      .catch(error => console.log(error))
     
    setUpdatePost({title: '', article: '', authorname: '', time: ''})
    
  }
  return (
    <UpdateContainer>
      <div className="container" >
        <form onSubmit={submitForm} className="form-container" encType="multipart/form-data">
          <h1>Edit Article</h1>
          <span className="message">{message}</span>
          <div className="form-group">
            <label htmlFor="authorname">Author Name</label>
            <input type="text" className="form-control" placeholder="Author Name" 
              value={updatePost.authorname}
              onChange={(e) => setUpdatePost({...updatePost, authorname: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" placeholder="Title" 
              value={updatePost.title}
              onChange={(e) => setUpdatePost({...updatePost, title: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="article">Article</label>
            <textarea className="form-control" rows="3"
              value={updatePost.article}
              onChange={(e) => setUpdatePost({...updatePost, article: e.target.value})}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary px-4">Update</button>
      </form>
    </div>
  </UpdateContainer>
  )
}

export default Update

const UpdateContainer = styled.div`
  margin: 5rem 0;
  .form-container {
  max-width: 30rem;
  margin: auto
 }
  h1 {
    margin-bottom: 0.5rem
  }
  .message {
    color: tomato;
    font-weight: 900;
    padding: 1rem 1rem 1rem 0;
  }
`