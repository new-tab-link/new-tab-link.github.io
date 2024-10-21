import { Transition } from 'react-transition-group';
import { useRef, useState } from 'react';
import { useSpring,animated } from '@react-spring/web'
const duration = 2300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  backgroundColor: "blue"
}

const transitionStyles = {
  entering: { opacity: 1 , backgroundColor: "red"},
  entered:  { opacity: 1 , backgroundColor: "green"},
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

function Fade({ in: inProp }: { in: boolean }) {
  const nodeRef = useRef(null);
  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
      {state => (
        <div ref={nodeRef} style={{
          ...defaultStyle,
          ...transitionStyles[state as keyof typeof transitionStyles]
        }}>
          I'm a fade Transition!
        </div>
      )}
    </Transition>
  );
}

function SpringTest(){
  const [springs, api] = useSpring(() => ({
    from: {
      border: "2px solid rgba(255,0,0,1)", borderRadius:3 },
  }))

  const handleClick = () => {
    console.log('clicked')
    api.start({
      from: {
         border: "2px solid rgba(255,0,0,1)"
      },
      to: [
        {border: "2px solid rgba(255,0,0,1)"},
        {border: "2px solid rgba(255,0,0,0)"},
        {border: "2px solid rgba(255,0,0,1)"},
        {border: "2px solid rgba(255,0,0,0)"},
        {border: "2px solid rgba(255,0,0,1)"},
        {border: "2px solid rgba(255,0,0,0)"},
        {border: "2px solid rgba(255,0,0,1)"},
        {border: "2px solid rgba(255,0,0,0)"},
        {border: "2px solid rgba(255,0,0,1)"},
        {border: "2px solid rgba(255,0,0,0)"},
      ],
    })
  }
  console.log('SpringTest',springs)
  return (
    <animated.div
      onClick={handleClick}
      style={{
        width: 80,
        height: 80,
        ...springs,
      }}
    />
  )
}

export function TransitionTest() {
    const [inProp, setInProp] = useState(false);
    const nodeRef = useRef(null);
    return (
      <div>
        {/* <Transition nodeRef={nodeRef} in={inProp} timeout={3500}>
          {state => (
            // ...
            <div>
                def{state}abc
            </div>
          )}
        </Transition> */}
        <Fade in={inProp} />
        <SpringTest />
        <button onClick={() => setInProp(true)}>
          Click to Enter
        </button>
        <button onClick={() => setInProp(false)}>
          Click to leave
        </button>
      </div>
    );
  }