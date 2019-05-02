import React from 'react';
import Alert from 'react-bootstrap/Alert'

const demosHeader = (props) => {
  /*const lessons = {
    all: 28,
    completed: 7
  };*/

  return (
    <Alert variant="info">
      <p className="mb-0">
        React se právě učím z videokurzu{' '}
        <a href="https://www.udemy.com/react-the-complete-guide-incl-redux/"
            target="_blank"
            rel="noopener noreferrer">
          React - The Complete Guide (incl Hooks, React Router, Redux){' '}
        </a> na <a href="https://www.udemy.com"
                 target="_blank"
                 rel="noopener noreferrer">
          Udemy
        </a>.<br/>
        Ukázky postupně vylepšuji a přidávám další funkcionality.
      </p>
      {/*<p>
        Postup: {lessons.completed}/{lessons.all}
        <div className="progress">
          <div className="progress-bar" role="progressbar" style={{width: (lessons.completed/lessons.all)*100 + "%"}}
               aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
        </div>
      </p>*/}
    </Alert>
  );
};

export default demosHeader;
