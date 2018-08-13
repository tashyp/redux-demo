import React from 'react';
import './App.css';
import CommentsList from './CommentsListContainer';
import AddCommentContainer from './AddCommentContainer';

const App = () => {
  return (
    <div className="App">
      <CommentsList />
    </div>
  );
};

export default App;