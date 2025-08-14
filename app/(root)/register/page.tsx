"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, ArrowLeft, Loader2, Check } from "lucide-react"

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  // Password strength indicators
  const hasMinLength = password.length >= 8
  const hasUpperCase = /[A-Z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#396C03] to-[#2A5102] flex flex-col">
      {/* Header with navigation */}
      <header className="w-full p-4 flex items-center">
        <Link href="/" className="flex items-center text-white hover:text-white/80 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          <span>Back to Home</span>
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Card with glass effect */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            {/* Logo and branding */}
            <div className="pt-8 pb-4 px-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#396C03" className="w-10 h-10">
                  <path d="M17.5 3A3.5 3.5 0 0 1 21 6.5c0 1.63-1.17 3-2.72 3.28.17.47.28.97.28 1.47 0 2.25-1.7 4.5-5 6.75-3.3-2.25-5-4.5-5-6.75 0-.5.11-1 .28-1.47A3.5 3.5 0 0 1 6.5 3 3.5 3.5 0 0 1 10 6.5c0 .5-.11 1-.28 1.47A3.5 3.5 0 0 1 12 11.2a3.5 3.5 0 0 1 2.28-3.23A3.5 3.5 0 0 1 14 6.5 3.5 3.5 0 0 1 17.5 3M6.5 5A1.5 1.5 0 0 0 5 6.5 1.5 1.5 0 0 0 6.5 8 1.5 1.5 0 0 0 8 6.5 1.5 1.5 0 0 0 6.5 5m11 0A1.5 1.5 0 0 0 16 6.5 1.5 1.5 0 0 0 17.5 8 1.5 1.5 0 0 0 19 6.5 1.5 1.5 0 0 0 17.5 5M12 8.5a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-1">FastServe</h1>
              <p className="text-white/70">Create your account</p>
            </div>

            {/* White form area */}
            <div className="bg-white p-8 rounded-t-3xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#396C03] focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#396C03] focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Create a password"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#396C03] focus:border-transparent transition-all"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  {/* Password strength indicators */}
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center text-sm">
                      <div
                        className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${hasMinLength ? "bg-green-500" : "bg-gray-300"}`}
                      >
                        {hasMinLength && <Check size={12} className="text-white" />}
                      </div>
                      <span className={hasMinLength ? "text-green-600" : "text-gray-500"}>At least 8 characters</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div
                        className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${hasUpperCase ? "bg-green-500" : "bg-gray-300"}`}
                      >
                        {hasUpperCase && <Check size={12} className="text-white" />}
                      </div>
                      <span className={hasUpperCase ? "text-green-600" : "text-gray-500"}>
                        At least 1 uppercase letter
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div
                        className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${hasNumber ? "bg-green-500" : "bg-gray-300"}`}
                      >
                        {hasNumber && <Check size={12} className="text-white" />}
                      </div>
                      <span className={hasNumber ? "text-green-600" : "text-gray-500"}>At least 1 number</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div
                        className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${hasSpecialChar ? "bg-green-500" : "bg-gray-300"}`}
                      >
                        {hasSpecialChar && <Check size={12} className="text-white" />}
                      </div>
                      <span className={hasSpecialChar ? "text-green-600" : "text-gray-500"}>
                        At least 1 special character
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#396C03] focus:border-transparent transition-all"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 text-[#396C03] focus:ring-[#396C03] border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    I agree to the{" "}
                    <a href="#" className="text-[#396C03] hover:text-[#2A5102] transition-colors">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#396C03] hover:text-[#2A5102] transition-colors">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#396C03] hover:bg-[#2A5102] text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin mr-2" />
                      Creating account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>

                <div className="relative flex items-center justify-center">
                  <div className="border-t border-gray-300 absolute w-full"></div>
                  <div className="bg-white px-4 relative text-sm text-gray-500">or sign up with</div>
                </div>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-xl transition-all duration-300 border border-gray-300 shadow-sm hover:shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  Sign up with Google
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login" className="font-medium text-[#396C03] hover:text-[#2A5102] transition-colors">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Food illustrations */}
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full p-3 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-full h-full">
                <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
              </svg>
            </div>
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full p-3 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-full h-full">
                <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z" />
              </svg>
            </div>
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full p-3 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-full h-full">
                <path d="M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zm0 15.92L5.51 6.36C7.32 4.85 9.62 4 12 4s4.68.85 6.49 2.36L12 17.92z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage

