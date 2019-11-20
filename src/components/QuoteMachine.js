import React from 'react';
import Button from './Button';
import Quote from './Quote';
import Author from './Author';



const QuoteMachine = (props) => (
    <div id="quote-machine">
        <div id="quote-box">{/* This is the old framework. Will work if uncommented  */}

            {/* {props.finalQuote ? 
props.finalQuote.quote 
+ "-" + props.finalQuote.author  : ""}
<Button buttonDisplayName="Next Quote" clickHandler={props.assignNewQuoteIndex} /> */}
            <Quote finalQuote={props.finalQuote}></Quote>
            <Author finalQuote={props.finalQuote}></Author>
            <Button buttonDisplayName="Next Quote" clickHandler={props.assignNewQuoteIndex} />
        </div>

    </div>);


export default QuoteMachine;