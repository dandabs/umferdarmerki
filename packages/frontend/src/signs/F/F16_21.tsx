import React, { useState, useEffect } from 'react';

export interface F16_21Props {
    placeName: string
}

export default function F16_21({ placeName }: F16_21Props) {

  const paddingX = 35;
  const paddingY = 15;
  const fontSize = 24;

  const textRef = React.useRef<SVGTextElement>(null);
  const [textWidth, setTextWidth] = useState<number>(0);
  const [textHeight, setTextHeight] = useState<number>(0);

  useEffect(() => {
    if (textRef.current) {
            const bbox = textRef.current.getBBox();
            setTextWidth(bbox.width);
            setTextHeight(bbox.height);
            console.log(bbox);
        }
    }, [textRef, placeName]);

    const width = textWidth + paddingX;
    const height = width;

  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
  
  <rect
    x="0"
    y="0"
    width={width}
    height={height}
    fill="white"
    stroke="white"
    strokeWidth="10" 
    strokeDasharray="10,5"
    rx="10"
  />

  <rect
    x="3"
    y="3"
    width={width - 6}
    height={height - 6}
    fill="white"
    stroke="black"
    strokeWidth="3"
    strokeDasharray="10,5"
    rx="2"
  />

  <text
    ref={textRef}
    x="50%"
    y="53%"
    fontSize={fontSize}
    fill="black"
    fontFamily="Transport New"
    fontWeight="bold"
    dominantBaseline="middle"
    textAnchor="middle"
    style={{ paddingLeft: 2 }}
  >
    {placeName}
  </text>
</svg>

  );
}
