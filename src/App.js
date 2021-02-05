import './App.css';
import React from 'react';
import Layout from './components/Layout';
import Blog from './containers/Blog/Blog';
import BlogDetail from './containers/BlogDetail/BlogDetail';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/detail" component={BlogDetail} />
        <Route path="/" exact component={Blog} />
      </Switch>
    </Layout >
  );
}

export default App;
