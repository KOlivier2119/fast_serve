import { FaCheckCircle } from "react-icons/fa";

const Badge = () => {
  return (
    <div className="absolute top-[7.5rem] right-10 flex flex-col items-center justify-center p-4 bg-white/10 backdrop-blur-lg rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-[#FF8B00] flex items-center">
        <FaCheckCircle className="mr-2" /> 200k+
      </h1>
      <p className="text-sm text-gray-600">People delivered</p>
    </div>
  );
};

export default Badge;
