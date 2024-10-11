import React from 'react'
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import logo from "/public/Logo.png"

const TextScene3: React.FC = () => {

    const frame = useCurrentFrame()
    const { fps } = useVideoConfig()
    const textArr = ['Over 20', 'years of', 'dedicated', 'Medicare', 'expertise']

    const from = fps
    const to = (fps * 2) - 20
    const scale = interpolate(frame, [from, to], [1.5, 1], {
        extrapolateRight: "clamp"
    })
    const skew = interpolate(frame, [from, to], [5, 0], {
        extrapolateRight: "clamp"
    })

    const transitionY = interpolate(frame, [from, to], [5, 0], {
        extrapolateRight: "clamp"
    })

    return (
        <AbsoluteFill
        style={{
            zIndex: 1,
            fontSize: 120,
            top: "10%",
            width: "max-content",
            marginLeft: "3rem",
            display: "flex",
            transform: `scale(${scale}) skew(${skew}deg, ${skew}deg)`,
            translate: `-${transitionY}% -${transitionY}%`,
        }}
        className='altone-bold'>
            <div
            style={{marginBottom: 20, overflow: "hidden"}}
            >
                <img src={logo} alt='Health insurance logo'
                style={{
                    width: "400px",
                }}
                />
            </div>
            {
                textArr.map((text, index) => {

                    const springEffect = spring({
                        frame: (frame - index * 2), // Delay each letter's animation by 2 frames
                        fps: fps,
                        delay: 15,
                        config: {
                            damping: 100
                        }
                    });

                    // Translate each letter from left to right
                    const translateY = interpolate(springEffect, [0, 1], [index > 1 ? 100 : -100, 0], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                    });
                    const scaleX = interpolate(frame, [from, 60], [0.9, 1], {
                        extrapolateRight: "clamp"
                    });

                    const blur = interpolate(frame, [from, 50], [10, 0], {
                        extrapolateRight: "clamp"
                    });

                    return <div
                    key={index}
                    style={{
                        display: 'inline-block',
                        marginRight: 5,
                        transform: `scaleX(${scaleX})`,
                        translate: `-${translateY/25}% ${translateY}%`,
                        filter: `blur(${blur}px)`,
                        // transform: `translateX(${0}px)`,
                        opacity: springEffect,
                        lineHeight: '1'
                    }}>
                        {text}
                    </div>
                })
            }
        </AbsoluteFill>
    )
}

export default TextScene3