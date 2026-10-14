// Íconos en SVG: las flechas Unicode no están en el subset latin de las fuentes y caerían a otra tipografía.
type Direction = 'right' | 'down' | 'up-right'

const ROTATION: Record<Direction, string> = { right: '0deg', down: '90deg', 'up-right': '-45deg' }

export function Arrow({ direction = 'right', className }: { direction?: Direction; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.75}
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ rotate: ROTATION[direction] }}
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  )
}

export function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
      <rect x="5" y="4" width="5" height="16" />
      <rect x="14" y="4" width="5" height="16" />
    </svg>
  )
}

export function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M6 4l14 8-14 8z" />
    </svg>
  )
}
