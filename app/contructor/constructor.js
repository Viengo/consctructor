import React, { PropTypes } from 'react';

function Constructor(props) {
  return (
    <div className="main">
      <div className="wrap">
        <header />
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
