import React from 'react';


const Quote = (props) => (
    <div id="text">
        "{props.finalQuote ? props.finalQuote.quote + "" : null}"
    </div>);







export default Quote;