'use client'

import { useRive } from '@rive-app/react-canvas'

// State machine "Main": idle → wave (hover) → look (sigue el cursor). README §7.
export default function Mascot() {
  const { RiveComponent } = useRive({
    src: '/mascot/mascot.riv',
    stateMachines: 'Main',
    autoplay: true,
  })

  return <RiveComponent aria-hidden="true" className="h-64 w-64" />
}
