import React from 'react'
// import { linearTiming, springTiming, TransitionSeries } from "@remotion/transitions";
// import { slide } from "@remotion/transitions/slide";
// import Image1 from '/public/1.jpg'
import { AbsoluteFill } from 'remotion';

// const springTimingWithSlide = (): TransitionTiming => {
//     return {
//         getDurationInFrames: ({fps}) => fps,
//         getProgress: ({frame, fps}) => frame / fps
//     }
// }

const Scene1: React.FC = () => {
  return (
    <AbsoluteFill style={{background: "#ffffff"}}>
    </AbsoluteFill>
  )
}

export default Scene1