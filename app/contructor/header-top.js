import React, { PropTypes } from 'react';

function HeaderTop() {
  return (
    <div className="top-line">
      <div className="container">
        <ul className="social">
          <li className="vk"><a href="http://vkontakte.com/">vk</a></li>
          <li className="fb"><a href="http://vkontakte.com/">fb</a></li>
          <li className="inst"><a href="http://vkontakte.com/">inst</a></li>
        </ul>
      </div>
    </div>
  );
}

// HeaderTop.propTypes = {
//   text: PropTypes.string,
// };

export default HeaderTop;
