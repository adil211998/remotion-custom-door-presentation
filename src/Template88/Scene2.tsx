import React from 'react'
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import { TransitionSeries } from '@remotion/transitions'
import logo from "/public/Logo.png"

const Scene2: React.FC = () => {

    const frame = useCurrentFrame()
    const { fps, durationInFrames } = useVideoConfig()
    // const textTranslate = interpolate(frame, [30, 60], [100, 0], {
    //     extrapolateRight: "clamp"
    // })

    const textArr = ['Health Insurance', 'Made Easy'];

    const logoTransitionY = interpolate(frame, [fps, fps * 3], [200, 0], {
        extrapolateRight: "clamp"
    })

    const duration = 30;
    const smallLeftBoxTransition = interpolate(frame, [15, (15 + duration) - 10], [120, 60], {
        extrapolateRight: "clamp"
    })
    const largeLeftBoxTransition = interpolate(frame, [15, 15 + duration], [120, 60], {
        extrapolateRight: "clamp"
    })


  return (
    <AbsoluteFill
    style={{
        backgroundColor: "#367cf6"
    }}
    >
        <TransitionSeries>
            <TransitionSeries.Sequence durationInFrames={durationInFrames}>
                {/* <img src={Image1} alt='Image 1' width={"100%"} /> */}
                <AbsoluteFill
                style={{
                    background: "transparent",
                    fontSize: 40 * 3,
                    // transform: `translateY(${textTranslate}px)`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "600",
                    color: "#ffffff"
                }}
                >
                    <div
                    style={{marginBottom: 20, overflow: "hidden"}}
                    >
                        <img src={logo} alt='Health insurance logo'
                        style={{
                            width: "400px",
                            transform: `translateY(${logoTransitionY}%)`
                        }}
                        />
                    </div>
                    {
                        textArr.map((text, i) => <div key={i} style={{display: "flex"}}>
                        {
                            text.split("").map((letter, index) => {
                        
                            const springEffect = spring({
                                frame: (frame - index * 2), // Delay each letter's animation by 2 frames
                                fps: 30,
                                delay: 15,
                                config: {
                                    damping: 100
                                }
                            });

                            // Translate each letter from left to right
                            const translateY = interpolate(springEffect, [0, 1], [100, 0], {
                                extrapolateLeft: "clamp",
                                extrapolateRight: "clamp",
                            });
                            const scaleX = interpolate(frame, [30, 60], [0.8, 1], {
                                extrapolateRight: "clamp"
                            });

                            const blur = interpolate(frame, [30, 50], [10, 0], {
                                extrapolateRight: "clamp"
                            });

                            if(letter === " ")
                            {
                                return <span key={index} style={{marginRight: 20}}></span>
                            }

                            return (
                                <span
                                    key={index}
                                    style={{
                                        display: 'inline-block',
                                        marginRight: 5,
                                        transform: `scaleX(${scaleX})`,
                                        translate: `0 ${translateY}%`,
                                        filter: `blur(${blur}px)`,
                                        // transform: `translateX(${0}px)`,
                                        opacity: springEffect,
                                    }}
                                >
                                    {letter}
                                </span>
                            );
                            })
                        }
                            </div>
                        )
                    }
                </AbsoluteFill>

                {/* Left side curve triangels */}
                <AbsoluteFill
                style={{
                    background: "#ff0000",
                    fontSize: 40 * 3,
                    width: "700px",
                    height: "700px",
                    fontWeight: "600",
                    borderRadius: "80px",
                    transform: "rotate(45deg)",
                    translate: `-${largeLeftBoxTransition}% -50%`
                }}
                ></AbsoluteFill>

                <AbsoluteFill
                style={{
                    background: "#ff0000",
                    fontSize: 40 * 3,
                    width: "400px",
                    height: "400px",
                    fontWeight: "600",
                    borderRadius: "80px",
                    transform: "rotate(45deg)",
                    translate: `-${smallLeftBoxTransition}% 50%`,
                    boxShadow: "rgb(40 40 40 / 31%) -3px -3px 10px 0px"
                }}
                ></AbsoluteFill>

                {/* Right side curve triangels */}
                <AbsoluteFill
                style={{
                    background: "#ff0000",
                    width: "500px",
                    height: "500px",
                    right: "0px",
                    top: "auto",
                    left: "auto",
                    fontSize: 40 * 3,
                    fontWeight: "600",
                    borderRadius: "80px",
                    transform: "rotate(45deg)",
                    translate: `${largeLeftBoxTransition}% -30%`,
                    boxShadow: "rgb(40 40 40 / 31%) -3px -3px 10px 0px"
                }}
                ></AbsoluteFill>

                <AbsoluteFill
                style={{
                    background: "#ff0000",
                    width: "700px",
                    height: "700px",
                    right: "0px",
                    top: "auto",
                    left: "auto",
                    fontSize: 40 * 3,
                    fontWeight: "600",
                    borderRadius: "80px",
                    transform: "rotate(45deg)",
                    translate: `${smallLeftBoxTransition}% 40%`,
                    boxShadow: "rgb(40 40 40 / 31%) -3px -3px 10px 0px"
                }}
                ></AbsoluteFill>
            </TransitionSeries.Sequence>
        </TransitionSeries>
    </AbsoluteFill>
  )
}

export default Scene2