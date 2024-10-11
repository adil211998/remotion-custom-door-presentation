import React from 'react'
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion'

const BottomLayer: React.FC = () => {

    const frame = useCurrentFrame()
    const bottomLayer1TranslateY = interpolate(frame, [5, 20], [200, 480], {
        extrapolateRight: "clamp"
    });
    
    const bottomLayer2TranslateY = interpolate(frame, [5, 20], [250, 500], {
        extrapolateRight: "clamp"
    });

    return (
        <>
        <AbsoluteFill
        style={{
            height: "200px",
            width: "100%",
            bottom: "0%",
            background: "#3f8ef7",
            transform: `translateY(${bottomLayer1TranslateY}%) rotate(10deg)`,
            scale: '1.4',
            zIndex: 1
        }}
        >
            {''}
        </AbsoluteFill>
        <AbsoluteFill
        style={{
            height: "200px",
            width: "100%",
            bottom: "0%",
            background: "linear-gradient(90deg, #ea33f6, #ea33f6, #e33183)",
            transform: `translateY(${bottomLayer2TranslateY}%) rotate(10deg)`,
            scale: '1.4',
            zIndex: 2
        }}
        >
            {''}
        </AbsoluteFill>
        </>
    )
}

export default BottomLayer