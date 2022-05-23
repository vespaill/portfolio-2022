import React from 'react';

const Header = props => {
  return (
    <div className="bg-nero pt-4 pb-3">
      <h1 className="headerText">
        {props.children.split(' ').map((word, index) => {
          let spanClasses = 'headerFirstLetter';
          spanClasses += index > 0 ? ' d-none d-md-inline-block pl-5' : '';
          return (
            <span
              key={index}
              style={{ display: 'inline-block' }}
              className={spanClasses}
            >
              {word}
            </span>
          );
        })}
        <span className="d-inline-block d-md-none">.</span>
      </h1>
    </div>
  );
};

export default Header;
