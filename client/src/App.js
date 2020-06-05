import React, {useState, useEffect} from 'react';
import {Route, Switch} from "react-router-dom"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Content, AddArticle, Article, Update} from './components'
import {Header, Footer, Navbar} from './components'

function App() {
  const [data, setData] = useState([])
  const [toggle, setToggle] = useState(true)

  const fetchData = () => {
    axios.get('/articles')
    .then(res => setData(res.data))
    .catch(error => console.log(error))
  }
  useEffect(() => {
    fetchData()
  }, [toggle])

  const deleteArticle = id => {
    axios.delete(`/articles/${id}`)
    .then(res => console.log(res.data))
    //setData(data.filter(item => item._id !== id))
    setToggle(!toggle)
  }

  return (
    <div className="container-flex bg-light">
    <Header />
    <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => <Content {...props} data={data} deleteArticle={deleteArticle}/>} />
        {/*<Route path="/article/:id" render={(props) => <Article {...props} data={data} />} />*/}
        <Route path="/article/:id" component={Article}/>
        <Route path="/update/:id" render={(props) => <Update {...props} setToggle={setToggle} toggle={toggle}/>} />
        <Route path="/add-article" render={(props) => <AddArticle {...props} setToggle={setToggle} toggle={toggle}/>} />
        </Switch>
    <Footer />
    </div>
  );
}
export default App;
