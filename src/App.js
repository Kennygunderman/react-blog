import './App.css';
import React from 'react';
import Layout from './components/Layout';
import Blog from './containers/Blog/Blog';
import Home from './components/Home/Home'
import BlogDetail from './containers/BlogDetail/BlogDetail';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/detail/:blogId" component={BlogDetail} />
      </Switch>
    </Layout >
  );
}

export default App;
