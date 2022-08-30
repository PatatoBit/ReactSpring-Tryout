import { useSpring, animated } from 'react-spring'
import { useState } from 'react'

export default function Number() {
  const [flip, set] = useState(false)
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: 1,
    delay: 200,
    onRest: () => set(!flip),
  })

	return (
		
		<animated.div className="font-bold text-6xl text-blue-600">
			{number.to(n => n.toFixed(2))}
		</animated.div>
	)
}