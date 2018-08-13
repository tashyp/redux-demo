import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment}) =>
  <li>
    {text} 
    <span>votes: {votes}</span> 
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbDownComment(id)}>Thumb down</button>
    <button onClick={() => removeComment(id)}>Remove comment</button>
    <button onClick={() => editComment(id, prompt('text'))}>Edit comment</button>
  </li>;
  
export default Comment;