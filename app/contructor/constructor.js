import React, { PropTypes } from 'react';
import Header from './header';

require('./style.scss');

function Constructor(props) {
  return (
    <div className="main">
      <div className="wrap">
        <Header />
        <section>
          <h2>{props.text}</h2>
        </section>
      </div>
      <footer />
    </div>
  );
}

Constructor.propTypes = {
  text: PropTypes.string,
};

export default Constructor;
