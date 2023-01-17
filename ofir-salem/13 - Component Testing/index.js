import classNames from 'classnames';
import React from 'react';

export default ({ data = [], onClick }) => {
  return (
    <ul>
      {data.map((element) => (
        <li
          key={element.key}
          onClick={() => onClick(element.key)}
          className={classNames({ selected: element.selected })}
        >
          {element.name}
        </li>
      ))}
    </ul>
  );
};
