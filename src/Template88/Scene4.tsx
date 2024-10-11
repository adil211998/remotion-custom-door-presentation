import React from 'react'
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import FashionImg from '/public/2.jpg'

const Scene4: React.FC = () => {
  const text = 'Fashion';
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  // const wipeProgress = spring({
  //   frame: frame,
  //   fps,
  //   config: { damping: 100, stiffness: 20 },
  // });

  // Calculate the width for the wipe effect
  // const width = interpolate(wipeProgress, [0, 1], [0, 100]);

  return (
    <AbsoluteFill
    style={{
      background: `url(${FashionImg})`,
      backgroundSize: "cover"
      // width: `${width}%`,
      // inset: "0",
    }}
    >
      <AbsoluteFill
        style={{
            color: "#fff",
            fontSize: 80 * 2.8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "sans-serif",
            fontWeight: "600",
        }}
        >
          {text}
        </AbsoluteFill>
    </AbsoluteFill>
  )
}

export default Scene4