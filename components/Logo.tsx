interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  /** default: green mark on light surfaces. onGreen: white mark on brand green. */
  variant?: "default" | "onGreen";
}

const Logo = ({ size = 36, showWordmark = true, variant = "default" }: LogoProps) => {
  const onGreen = variant === "onGreen";

  return (
    <div className="flex items-center gap-2.5 select-none">
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="10" fill={onGreen ? "#FFFFFF" : "#396C03"} />
        <path
          d="M10 22 C10 28 30 28 30 22"
          stroke={onGreen ? "#396C03" : "white"}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <line
          x1="8"
          y1="22"
          x2="32"
          y2="22"
          stroke={onGreen ? "#396C03" : "white"}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <line x1="15" y1="10" x2="15" y2="19" stroke="#FF8B00" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="9" x2="20" y2="19" stroke="#FF8B00" strokeWidth="2" strokeLinecap="round" />
        <line
          x1="23"
          y1="12"
          x2="29"
          y2="12"
          stroke={onGreen ? "#396C03" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />
        <line
          x1="25"
          y1="15.5"
          x2="29"
          y2="15.5"
          stroke={onGreen ? "#396C03" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>

      {showWordmark && (
        <span className="font-bold tracking-tight leading-none" style={{ fontSize: size * 0.56 }}>
          <span className={onGreen ? "text-white" : "text-gray-900"}>Fast</span>
          <span className="text-[#FF8B00]">Serve</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
