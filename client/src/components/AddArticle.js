import React, {useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'

function AddArticle({setToggle, toggle}) {
  const [addPost, setAddPost] = useState(
    {
      title: '',
      article: '',
      authorname: '',
      //time: new Date().toTimeString().slice(0,8),
    }
  )
  const [message, setMessage] = useState('')
  const submitForm = e => {
    e.preventDefault()
    axios.post("/articles/add", addPost)
      .then(res => {
        setMessage(res.data)
        setToggle(!toggle)
      })
      .catch(error => console.log(error))
    setAddPost({title: '', article: '', authorname: '', time: ''}) 
  }

  return (
    <AddContainer>
        <div className="container" >
          <form onSubmit={submitForm} className="form-container" encType="multipart/form-data" >
            <h1>Add new Article</h1>
            <span className="message">{message}</span>
            <div className="form-group">
              <label  htmlFor="authorname">Author Name</label>
              <input type="text" className="form-control " placeholder="Author Name" 
                value={addPost.authorname}
                onChange={(e) => setAddPost({...addPost, authorname: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" className="form-control" placeholder="Title" 
                value={addPost.title}
                onChange={(e) => setAddPost({...addPost, title: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="article">Article</label>
              <textarea className="form-control" rows="3"
                value={addPost.article}
                onChange={(e) => setAddPost({...addPost, article: e.target.value})}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Add Article</button>
          </form>
      </div>
  </AddContainer>
  )
}
export default AddArticle

const AddContainer = styled.div`
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