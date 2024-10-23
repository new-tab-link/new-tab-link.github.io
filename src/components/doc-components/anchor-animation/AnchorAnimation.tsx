import { Box } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { indexModel, useAnchor } from "@src/components/index/Model";
import { useMemoizedFn, useInViewport } from "ahooks";
import { PropsWithChildren, useEffect, useRef, useSyncExternalStore } from "react";

export function AnchorAnimation({anchor, children}:{anchor:string} & PropsWithChildren){
    const ref = useRef<HTMLDivElement>(null)
    const {anchor:anchorString, animationTriggered, setAnchorComplete} = indexModel.useAnchor()
    console.log('anchorData23rrrccccddd=', anchorString,'animationTriggered', animationTriggered, 'setAnchorComplete', setAnchorComplete)
    const callback = useMemoizedFn((entry)=>{
        // console.log('entry=', entry)
        // console.log('radio=', radio)
        // console.log('inViewport=', inViewport)
        if(!entry.isIntersecting)return;
        checkAnchor()
    })
    const [inViewport, radio] = useInViewport(ref, {callback})
    
    const checkAnchor = ()=>{
        // console.log('checkAnchor',indexModel.anchor.animationTriggered, inViewport, indexModel.anchor.anchor)
        if(indexModel.anchor.animationTriggered)return;
        if(indexModel.anchor.anchor !== anchor)return;
        // indexModel.anchor.animationTriggered = true
        indexModel.anchor.setHash(anchor)
        handleClick()
    }
    useEffect(()=>{
        if(!inViewport)return;
        checkAnchor()
    }, [inViewport])
    const [springs, api] = useSpring(() => ({
        from: {
          border: "2px solid rgba(255,0,0,0)", borderRadius:3 },
      }))
    
      const handleClick = () => {
        // console.log('handleClick')
        api.start({
          from: {
             border: "2px solid rgba(255,0,0,0)"
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
    return (<>
    <Box id={anchor} ref={ref}>
      <animated.div
        style={{
          ...springs,
        }}
      >{children}
      </animated.div>
    </Box>
    </>)
}

function Spring({children}:PropsWithChildren){
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
    return (
      <animated.div
        onClick={handleClick}
        style={{
          width: 80,
          height: 80,
          ...springs,
        }}
      >{children}
      </animated.div>
    )
  }