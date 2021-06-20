import React from 'react';

const Button = (props) => {
  const [color, setColor] = React.useState('blue');

  const changeColor = () => {
    if (color === 'blue') {
      setColor('red');
    } else {
      setColor('blue');
    }
  };

  return (
    <button onClick={changeColor} style={{color: color}}>
      {props.title}
    </button>
  );
};

export default Button;
