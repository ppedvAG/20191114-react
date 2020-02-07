import React from 'react';
import './App.css';

function FancyBorder(props) {
    // es ist möglich, die Komponenten auch mit schließenden Tags zur Ausgabe von anderen Inhalten zu verwenden.
    // in diesem Fall gibt man diese Inhalte über props.children aus.
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }
  
  function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }
  
  export default WelcomeDialog;