import React, { useState, useEffect } from 'react';
import municipalities from '../../municipalities';

export interface F18_11Props {
    municipality: string;
}

export default function F18_11({ municipality }: F18_11Props) {

  const paddingX = 35;
  const paddingY = 15;
  const fontSize = 24;

  const textRef = React.useRef<SVGTextElement>(null);
  const [textWidth, setTextWidth] = useState<number>(0);
  const [textHeight, setTextHeight] = useState<number>(0);

  const imageRef = React.useRef<SVGImageElement>(null);
  const [imageWidth, setImageWidth] = useState<number>(0);

  const munData = municipalities.find((m) => m.lau.toString() == municipality);

  useEffect(() => {
        if (textRef.current) {
            const bbox = textRef.current.getBBox();
            setTextWidth(bbox.width);
            setTextHeight(bbox.height);
            console.log(bbox);
        }

        if (imageRef.current) {
            const bbox = imageRef.current.getBoundingClientRect();
            setImageWidth(bbox.width);
            console.log("image", bbox);
        }
    }, [textRef, imageRef, municipality]);

    const width = textWidth + paddingX;
    const height = textHeight + paddingY + 100;

    console.log("width", width)
    console.log("imagewidth", imageWidth)
    console.log("image+imagewidth/2", (width - imageWidth) / 2)

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
        x={width / 2}
        y={height - fontSize}
        fontSize={fontSize}
        fill="black"
        fontFamily="Transport New"
        fontWeight="bold"
        dominantBaseline="middle"
        textAnchor="middle"
        style={{ paddingLeft: 2 }}
        letterSpacing={4}
      >
        {munData.vernacularName || munData.officialName}
      </text>

      <image
        ref={imageRef}
        onLoad={(e) => setImageWidth(e.currentTarget.getBBox().width)}
        href={munData.image}
        height={height / 1.9}
        x={(width - imageWidth) / 2}
        y="10%"
      />

    </svg>
  );
}
