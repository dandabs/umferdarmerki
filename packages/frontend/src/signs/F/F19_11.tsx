import React, { useEffect, useRef, useState } from 'react';

export interface F19_11Props {
    routeNumber: number;
    placeNameAndDistanceList: { placeName: string; distance: number }[];
}

export default function F19_11({ routeNumber, placeNameAndDistanceList }: F19_11Props) {
    const paddingX = 20;
    const paddingY = 10;
    const fontSize = 24;
    const lineSpacing = 29;

    const routeTextPaddingX = 70;
    const routeTextPaddingY = 4;

    const textRef = useRef<SVGTextElement>(null);
    const [textWidth, setTextWidth] = useState<number>(0);
    const [textHeight, setTextHeight] = useState<number>(0);

    useEffect(() => {
        if (textRef.current) {
            const bbox = textRef.current.getBBox();
            setTextWidth(bbox.width);
            setTextHeight(bbox.height);
            console.log(bbox);
        }
    }, [textRef, routeNumber, placeNameAndDistanceList]);
    
    const routeNumberHeight = 50;
    const textBlockHeight = placeNameAndDistanceList.length * lineSpacing;
    const width = 310;
    const height = routeNumberHeight + textBlockHeight + 2 * paddingY + 10;
    
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
            rx="10"
        />

        <rect
            x="3"
            y="3"
            width={width - 6}
            height={height - 6}
            fill="#1b63af"
            stroke="white"
            strokeWidth="3"
            rx="5"
        />
            
            {/* Route Number Box */}
            <rect x={(width / 2) - (textWidth + routeTextPaddingX) / 2} y={15 + routeTextPaddingY} width={textWidth + routeTextPaddingX} height={textHeight + routeTextPaddingY} fill="#f8cb00" stroke="black" strokeWidth="3.5" rx="3" />
            <text ref={textRef} x={width / 2} y={routeNumberHeight / 2 + 15} fontSize={fontSize} fill="black" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">{routeNumber}</text>
            
            {/* Place Names and Distances */}
            {placeNameAndDistanceList.map((item, index) => (
                <g key={index}>
                    <text x={paddingX} y={routeNumberHeight + paddingY + (index + 1) * lineSpacing} fontSize={fontSize} letterSpacing={2.5} fill="white" textAnchor="start">{item.placeName}</text>
                    <text x={width - paddingX} y={routeNumberHeight + paddingY + (index + 1) * lineSpacing} fontSize={fontSize} fill="white" letterSpacing={2.5} textAnchor="end">{item.distance}</text>
                </g>
            ))}
        </svg>
    );
}