import React, { PureComponent } from 'react'
import { interpolate, interpolateTransformSvg } from 'd3'
import { range } from 'd3'
import { easeExpInOut } from 'd3'
import { Animate } from 'react-move'

// function Kid(){
//   console.log('kid')
//   return (
//     <div style={{width:200,height:200,backgroundColor:"red"}}>kid</div>
//   )
// }

interface KidState {
  count:number
}

class Kid extends PureComponent<{},KidState>{
  state = {
    count:0
  }
  render(){
    console.log('kid')
    return (
      <div style={{width:200,height:200,backgroundColor:"red"}}>kid{this.state.count}
      <button onClick={()=>{this.setState({count:this.state.count+1})}}>click</button>
      </div>
    )
  }
}
function getRandomColor() {
  return range(6).reduce((m) => {
    return `${m}${'0123456789ABCDEF'[Math.floor(Math.random() * 16)]}`
  }, '#')
}

interface State {
  show: boolean
  color: string
}

export class Example extends PureComponent<{}, State> {
  state = {
    show: false,
    color: '#00cf77',
  }

  updateShow = () => {
    this.setState((prev) => ({ show: !prev.show }))
  }

  updateColor = () => {
    this.setState(() => ({ show: true, color: getRandomColor() }))
  }

  render() {
    const { updateShow, updateColor, state: { show, color } } = this

    return (
      <div>
        <button onClick={updateShow}>
          Toggle
        </button>
        {show ? (
          <button onClick={updateColor}>
            Update Color
          </button>
        ) : null}
        <Animate
          show={show}

          start={{
            opacity: 0,
            backgroundColor: color,
          }}

          enter={{
            opacity: [1],
            timing: { duration: 1000, ease: easeExpInOut },
          }}

          update={{
            opacity: [1],
            backgroundColor: [color],
            timing: { duration: 500, ease: easeExpInOut },
          }}

          leave={[
            {
              backgroundColor: ['#ff0063'],
              timing: { duration: 500, ease: easeExpInOut },
            },
            {
              opacity: [0],
              timing: { delay: 500, duration: 500, ease: easeExpInOut },
            },
          ]}

          interpolation={(begValue, endValue, attr) => {
            if (attr === 'transform') {
              return interpolateTransformSvg(begValue, endValue)
            }

            return interpolate(begValue, endValue)
          }}
        >
          {({ opacity, backgroundColor }) => {
            return (
              <div style={{
                opacity,
                width: 200,
                height: 200,
                marginTop: 10,
                color: 'white',
                backgroundColor,
              }}
              >
                {opacity.toFixed(3)}
                {/* <Kid /> */}
              </div>
            )
          }}
        </Animate>
      </div>
    )
  }
}