interface LogoProps {
  /** Size in px for the icon mark square */
  size?: number;
  /** Show the wordmark next to the icon */
  showWordmark?: boolean;
  /** Light variant — white icon bg, dark text */
  variant?: "default" | "light";
}

/**
 * FastServe logo — a bowl with steam and a speed-dash, set in a rounded
 * green square. Paired with the "FastServe" wordmark.
 */
const Logo = ({ size = 36, showWordmark = true, variant = "default" }: LogoProps) => {
  const isLight = variant === "light";

  return (
    <div className="flex items-center gap-2.5 select-none">
      {/* Icon mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Rounded square background */}
        <rect
          width="40"
          height="40"
          rx="10"
          fill={isLight ? "white" : "#396C03"}
        />

        {/* Bowl base */}
        <path
          d="M10 22 C10 28 30 28 30 22"
          stroke={isLight ? "#396C03" : "white"}
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Bowl rim line */}
        <line
          x1="8"
          y1="22"
          x2="32"
          y2="22"
          stroke={isLight ? "#396C03" : "white"}
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Chopstick / fork left */}
        <line
          x1="15"
          y1="10"
          x2="15"
          y2="19"
          stroke={isLight ? "#FF8B00" : "#FF8B00"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Chopstick / fork right */}
        <line
          x1="20"
          y1="9"
          x2="20"
          y2="19"
          stroke={isLight ? "#FF8B00" : "#FF8B00"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Speed dash — conveys "fast" */}
        <line
          x1="23"
          y1="12"
          x2="29"
          y2="12"
          stroke={isLight ? "#396C03" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />
        <line
          x1="25"
          y1="15.5"
          x2="29"
          y2="15.5"
          stroke={isLight ? "#396C03" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>

      {/* Wordmark */}
      {showWordmark && (
        <span
          className="font-bold tracking-tight leading-none"
          style={{ fontSize: size * 0.56 }}
        >
          <span className={isLight ? "text-gray-900" : "text-white"}>Fast</span>
          <span className="text-[#FF8B00]">Serve</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
