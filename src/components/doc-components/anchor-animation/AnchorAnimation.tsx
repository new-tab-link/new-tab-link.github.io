import { Box } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { indexModel } from "@src/components/index/Model";
import { useMemoizedFn, useInViewport } from "ahooks";
import { PropsWithChildren, useRef } from "react";

export function AnchorAnimation({anchor, children}:{anchor:string} & PropsWithChildren){
    const ref = useRef<HTMLDivElement>(null)
    const callback = useMemoizedFn((entry)=>{
        console.log('entry=', entry)
        console.log('radio=', radio)
        console.log('inViewport=', inViewport)
        if(!entry.isIntersecting)return;
        if(indexModel.anchor.animationTriggered)return;
        indexModel.anchor.animationTriggered = true
        handleClick()
    })
    const [inViewport, radio] = useInViewport(ref, {callback})
    
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
    return (<>
    <Box id={anchor} ref={ref}>
        <div>
            {inViewport?.toString()}<br/>{radio?.toString()}
        </div>
        
      <animated.div
        onClick={handleClick}
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
    console.log('SpringTest',springs)
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