import React, { useState, useEffect } from 'react';

export interface F12_11Props {
    placeName: string
}

export default function F12_11({ placeName }: F12_11Props) {

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

    const width = textWidth + paddingX + 25;
    const height = textHeight + paddingY;

  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">

    <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill="#1b63af"
      />

      <text
        ref={textRef}
        x={width / 2 - 10}
        y="53%"
        fontSize={fontSize}
        fill="#f8cb00"
        fontFamily="Transport New"
        fontWeight="bold"
        dominantBaseline="middle"
        textAnchor="middle"
        startOffset={4}
      >
        {placeName}
      </text>
      

      <polyline
        points={`${width - 25},${0} ${width - 2},${height / 2} ${width - 25},${height}`}
        fill="none"
        stroke="#f8cb00"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
    />

    </svg>
  );
}
