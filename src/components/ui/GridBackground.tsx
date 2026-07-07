type GridBackgroundProps = {
  className?: string
}

export default function GridBackground({ className = '' }: GridBackgroundProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to right, rgba(230, 227, 227, 0.4) 0px, rgba(230, 227, 227, 0.4) 1px, transparent 1px, transparent 19px), repeating-linear-gradient(to bottom, rgba(230, 227, 227, 0.38) 0px, rgba(230, 227, 227, 0.38) 1px, transparent 1px, transparent 19px)',
        }}
      />
    </div>
  )
}
