import React from 'react'
import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig } from 'remotion'
import { linearTiming, springTiming, TransitionPresentation, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import Scene2 from './Scene2';
import Scene1 from './Scene1';
import './style.css';
import Scene3 from './Scene3';
import CustomTransition from '../Transitions/CustomTransition';

type CustomPresentationProps = {
    width: number;
    height: number;
  };
   
  export const customPresentation = (
    props: CustomPresentationProps,
  ): TransitionPresentation<CustomPresentationProps> => {
    return {component: CustomTransition, props};
};
  

const Template88: React.FC = () => {
    const {fps, durationInFrames, width, height} = useVideoConfig();
  return (
    <AbsoluteFill
    style={{
        background: "#ffffff",
    }}
    className='altone-bold'
    >
        <TransitionSeries>
            <TransitionSeries.Sequence durationInFrames={fps}>
                <Scene1 />
            </TransitionSeries.Sequence>

            <TransitionSeries.Transition
                presentation={fade()}
                timing={springTiming({ 
                    config: {
                        damping: 10,
                        stiffness: 50
                    },
                    durationInFrames: 30
                })}
            />

            <TransitionSeries.Sequence durationInFrames={fps * 5}>
                <Scene2 />
            </TransitionSeries.Sequence>

            <TransitionSeries.Transition
                presentation={customPresentation({
                    width: width,
                    height: height
                })}
                timing={springTiming({ 
                    config: {
                        damping: 10
                    },
                    durationInFrames: fps
                })}
            />

            <TransitionSeries.Sequence durationInFrames={fps * 3}>
                <Scene3 />
            </TransitionSeries.Sequence>
        </TransitionSeries>
    </AbsoluteFill>
  )
}

export default Template88