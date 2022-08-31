import { useSpring, animated } from 'react-spring'
import { useState } from 'react'

function Box() {

  	const [flip, set] = useState(false)
	// const [mouse, setMouse] = useState(false);

	const props = useSpring({
		from: { transform: 'scaleX(1.5)' },
		to: { transform: 'scaleX(1)' },
		delay: 200,
		reverse: flip,
    	onRest: () => set(!flip),
	})

  return (
	  <animated.div
		//   onMouseEnter={() => setMouse(true)}
		//   onMouseLeave={() => setMouse(false)}
		  style={props}
		  className='w-52 h-52 bg-red-500 rounded-xl'>
		  
	</animated.div>
  )
}

export default Box