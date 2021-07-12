import React from 'react';
import typeColors from '../../helpers/type-colors';
import './badge.styles.scss';

function Badge({ name }) {
  const color = typeColors[name] ? typeColors[name] : typeColors.default;
  return (
    <div
      className="badge"
      style={{
        border: `1px solid ${color}`,
        backgroundColor: color,
        color: `white`,
      }}
    >
      {name}
    </div>
  );
}

export default Badge;
