import React from 'react'
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import MediaImg from '/public/scene_3/Media_1.jpg';
import TopLayer from './Scene3/top-layer';
import BlurLayer from './Scene3/blur-layer';
import "./Scene3/style.css"
import TextScene3 from './Scene3/text';
import BottomLayer from './Scene3/bottom-layer';

const Scene3: React.FC = () => {

  const frame = useCurrentFrame()
  // const { width } = useVideoConfig()

  const mediaScale = interpolate(frame, [10, 40], [1, 10], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });
  const mediaTranslate = interpolate(frame, [10, 40], [30, 0], {
    extrapolateRight: "clamp"
  }); 

  const duration = 30;
  const RightCurve1Transition = interpolate(frame, [30, (30 + duration) - 10], [120, 60], {
    extrapolateRight: "clamp"
})
  
  const LeftCurve1Transition = interpolate(frame, [5, (5 + duration) - 10], [120, 60], {
      extrapolateRight: "clamp"
  })
  const LeftCurve2Transition = interpolate(frame, [5, 5 + duration], [120, 50], {
      extrapolateRight: "clamp"
  })

  return (
    <AbsoluteFill
    style={{
        background: "#fff",
        color: "#fff",
        fontSize: 80 * 2.8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        fontWeight: "600",
        textShadow: "0px 0px 5px #000",
        zIndex: 1
    }}
    >
      {/* Image Part */}
      <AbsoluteFill
      style={{
        background: "#367cf6",
      }}
      >
        {/* Left side curve triangels */}
        <AbsoluteFill
          style={{
            top: "auto",
            bottom: "0",
            background: "#ff0000",
            fontSize: 40 * 3,
            width: "500px",
            height: "500px",
            fontWeight: "600",
            borderRadius: "80px",
            transform: "rotate(45deg)",
            translate: `-${LeftCurve2Transition}% -10%`,
            boxShadow: "rgb(40 40 40 / 31%) -3px -3px 10px 0px",
            zIndex: 1,
          }}
        ></AbsoluteFill>

        <AbsoluteFill
          style={{
            top: "auto",
            bottom: "-50%",
            background: "#ff0000",
            fontSize: 40 * 3,
            width: "700px",
            height: "700px",
            fontWeight: "600",
            borderRadius: "80px",
            transform: "rotate(45deg)",
            translate: `-${LeftCurve1Transition}% -40%`
          }}
        ></AbsoluteFill>

        <TextScene3 />
        
        {/* Right curve behind image wrapper */}
        <AbsoluteFill
          style={{
            left: "auto",
            background: "#ff0000",
            fontSize: 40 * 3,
            width: "500px",
            height: "500px",
            fontWeight: "600",
            borderRadius: "80px",
            transform: "rotate(45deg)",
            translate: `${RightCurve1Transition}% -10%`,
            boxShadow: "rgb(40 40 40 / 31%) -3px -3px 10px 0px",
            zIndex: 0
          }}
        ></AbsoluteFill>

        {/* Image Wrapper */}
        <AbsoluteFill style={{
          padding: `calc(4rem + ${(mediaTranslate/30) * 200}px)`,
          background: "rgb(73 190 255 / 80%)",
          width:'1200px',
          borderRadius: '70px',
          right: '3rem',
          left: "auto",
          top: "3rem",
          height: "max-content",
          minHeight: "900px",
          transform: `translate(${mediaTranslate}%, -${mediaTranslate}%) scale(${mediaScale/10})`,
          mixBlendMode: "color-dodge",
          zIndex: 1
        }}
          className='image-wrapper'
        >
        </AbsoluteFill>

        <AbsoluteFill style={{
          background: "transparent",
          padding: `calc(4rem + ${(mediaTranslate/30) * 200}px)`,
          width:'1200px',
          borderRadius: '70px',
          right: '3rem',
          left: "auto",
          top: "3rem",
          height: "max-content",
          minHeight: "900px",
          transform: `translate(${mediaTranslate}%, -${mediaTranslate}%) scale(${mediaScale/10})`,
          zIndex: 1
        }}
          className='image-wrapper'
        >
          <img src={MediaImg} alt="House" width={"100%"} style={{
            objectFit: "cover",
            borderRadius: '50px',
            overflow: "hidden",
            height: `calc(900px - calc(4rem + ${(mediaTranslate/30) * 200}px) * 2)`
          }} />
        </AbsoluteFill>
        
      </AbsoluteFill>

      {/* Top Layer */}
      <TopLayer />

      {/* Blur Layer */}
      <BlurLayer />
      
      {/* Bottom Layer */}
      <BottomLayer />
    </AbsoluteFill>
  )
}

export default Scene3