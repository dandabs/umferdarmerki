import React, { useState, useEffect } from 'react';
import municipalities from '../../municipalities';

export interface F18_21Props {
    municipality: string;
}

export default function F18_21({ municipality }: F18_21Props) {

  const paddingX = 35;
  const paddingY = 15;
  const fontSize = 24;

  const textRef = React.useRef<SVGTextElement>(null);
  const [textWidth, setTextWidth] = useState<number>(0);
  const [textHeight, setTextHeight] = useState<number>(0);

  const munData = municipalities.find((m) => m.lau.toString() == municipality);

  useEffect(() => {
    if (textRef.current) {
            const bbox = textRef.current.getBBox();
            setTextWidth(bbox.width);
            setTextHeight(bbox.height);
            console.log(bbox);
        }
    }, [textRef, municipality]);

    const width = textWidth + paddingX + 50;
    const height = textHeight + paddingY;

  return munData && (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">

    <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill="white"
        stroke="white"
        strokeWidth="10" 
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
        rx="2"
    />

      <text
        ref={textRef}
        x={width / 2 + 15}
        y="53%"
        fontSize={fontSize}
        fill="black"
        fontFamily="Transport New"
        fontWeight="bold"
        dominantBaseline="middle"
        textAnchor="middle"
        style={{ paddingLeft: 2 }}
      >
        {munData.vernacularName || munData.officialName}
      </text>

      <image
        href={munData.image}
        height={height - 16}
        x={15}
        y="17%"
      />

    </svg>
  );
}
