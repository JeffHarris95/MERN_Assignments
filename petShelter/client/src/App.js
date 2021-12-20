import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import New from './views/New';
import Detail from './views/Detail';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <New path="/pet/new" />
        <Detail path="/pet/:id" />
        <Update path="/pet/:id/edit" />
      </Router>
    </div>
  );
}
export default App;