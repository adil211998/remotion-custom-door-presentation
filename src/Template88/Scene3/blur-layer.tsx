import React from 'react'
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion'

const BlurLayer: React.FC = () => {

    const frame = useCurrentFrame()
    const blurAnimateUpperTranslateY = interpolate(frame, [0, 25], [160, -200], {
        extrapolateRight: "clamp"
    });

    return (
        <AbsoluteFill
        style={{
            height: "600px",
            width: "100%",
            top: "0%",
            // background: "linear-gradient(174deg, #ea33f6, #ea33f6, #ea33f6, #3f8ef7, #3f8ef7, #3f8ef7)",
            background: "linear-gradient(45deg, #570acc54, rgba(63, 142, 247, 0.2))",
            backdropFilter: "blur(15px)",
            transform: `translateY(${blurAnimateUpperTranslateY}%) rotate(0deg)`,
            zIndex: 1
        }}
        >
            {''}
        </AbsoluteFill>
    )
}

export default BlurLayer