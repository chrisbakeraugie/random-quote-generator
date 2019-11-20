import React from 'react';

const Author = (props) => (
    <div id="author">
         - {props.finalQuote ? props.finalQuote.author : null}
    </div>);







export default Author;