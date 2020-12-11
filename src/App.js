import React , {useState, useEffect, createContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from './containers/Home';
import ArticleListUpdate from './containers/ArticleListUpdate';
import Header from './components/Header';
import Login from './components/Login';
import CreateArticle from './components/CreateArticle';
import ArticleDetail from './components/ArticleDetail';
import ArticleUpdate from './components/ArticleUpdate';

export const TokenContext = createContext({token: null});

function App() {
  const [token, setToken] = useState()

  //localStorage.setItem('token', token);

  useEffect(() => {
    const tokenSaved = localStorage.getItem("token");
     if (tokenSaved) {
      //const userToken = JSON.parse(tokenSaved);
      setToken(tokenSaved);
    } 
  }, []);

  const handleLogout = () => {
    setToken("");
    localStorage.clear();
  };

  console.log(token);


  
  return (
    < TokenContext.Provider value={ token }>
      <div className="App">
        <Router>
          <Header handleLogout={ handleLogout }/>
          <main>
            <Switch>
              <Route exact path="/" children={<Home/>}/>
              <Route path="/login" children={<Login setToken={ setToken } />}/>
              <Route exact path="/create_article" children={<CreateArticle/>}/>
              <Route exact path="/article_detail/:id" children={<ArticleDetail/>}/>
              <Route exact path="/article_detail/:id/update" children={<ArticleUpdate/>}/>
              <Route exact path="/update_articles" children={<ArticleListUpdate/>}/>
              
            </Switch>
          </main>
        </Router>
      </div>
    </TokenContext.Provider>
  );
}

export default App;
