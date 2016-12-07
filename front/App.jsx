import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route, browserHistory,IndexRoute} from 'react-router';
import Songs from './components/songs.jsx';
// import Navbar from './components/navbar';


const App = ()=>(
    return (<div>
             <h1>Hello</h1>
          </div>
          )
)

ReactDOM.render(
        <Route path="/" component={App}>
            <IndexRoute component={App} />
            <Route path="/songs" component={Songs}/>
        </Route>
  ,
    document.getElementById('app')
)

