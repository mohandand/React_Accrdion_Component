import React, { useRef, useState } from 'react';
import './style.css';

export default function Accordion(props) {
  const [height, setHeight] = useState('0px');

  let content = useRef(null);

  function toggleContent() {
    setHeight(height == '0px' ? `${content.current.scrollHeight}px` : '0px');
  }

  return (
    <div>
      <button className="Accrdion" onClick={toggleContent}>
        <div>{props.title}</div>
      </button>
      <div
        className="accrdioncotent"
        ref={content}
        style={{ maxHeight: `${height}` }}
      >
        {props.content}
      </div>
    </div>
  );
}
