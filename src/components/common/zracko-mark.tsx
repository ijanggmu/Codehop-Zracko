export function ZrackoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 69 69"
      width={69}
      height={68.95}
      className={className}
      aria-hidden="true"
    >
      <g
        fill="#0FAFA4"
        transform="translate(34.5 34.5)"
        style={{ filter: "drop-shadow(0px 0.59px 0px #33005D)" }}
      >
        {[0, 90, 180, 270].map((deg) => (
          <path
            key={deg}
            transform={`rotate(${deg + 45})`}
            d="M-8.2 5.5 L-7.2 -13.5 Q0 -29.5 7.2 -13.5 L8.2 5.5 Q0 9.5 -8.2 5.5 Z"
          />
        ))}
        <rect
          x={-8.6}
          y={-8.6}
          width={17.2}
          height={17.2}
          rx={2.2}
          transform="rotate(45)"
        />
      </g>
    </svg>
  );
}
