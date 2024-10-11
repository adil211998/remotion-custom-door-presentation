import React from 'react'
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion'

const TopLayer: React.FC = () => {

    const frame = useCurrentFrame()
    const moveupAnimateTranslateY = interpolate(frame, [0, 14], [60, -120], {
        extrapolateRight: "clamp"
    });
    const moveupAnimateUpperTranslateY = interpolate(frame, [0, 15], [60, -100], {
        extrapolateRight: "clamp"
    });

    return (
        <>
        <AbsoluteFill
        style={{
            height: "200px",
            width: "100%",
            top: "0%",
            background: "linear-gradient(90deg, #ea33f6, #ea33f6, #e33183)",
            transform: `translateY(${moveupAnimateTranslateY}%) rotate(-3deg)`,
            zIndex: 2,
            scale: "1.2"
        }}
        >
            {''}
        </AbsoluteFill>
        <AbsoluteFill
        style={{
            height: "400px",
            width: "100%",
            top: "0%",
            // background: "linear-gradient(174deg, #ea33f6, #ea33f6, #ea33f6, #3f8ef7, #3f8ef7, #3f8ef7)",
            background: "#3f8ef7",
            transform: `translateY(${moveupAnimateUpperTranslateY}%) rotate(0deg)`,
            zIndex: 1
        }}
        >
            {''}
        </AbsoluteFill>
        </>
    )
}

export default TopLayer