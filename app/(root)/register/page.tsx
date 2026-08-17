"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Logo from "@/components/Logo"
import GoogleAuthButton from "@/components/GoogleAuthButton"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ViewIcon,
  ViewOffSlashIcon,
  ArrowLeft01Icon,
  Loading03Icon,
  Tick01Icon,
} from "@hugeicons/core-free-icons"

const RegisterPage = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const hasMinLength = password.length >= 8
  const hasUpperCase = /[A-Z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password)
  const passwordReady = hasMinLength && hasUpperCase && hasNumber && hasSpecialChar

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!passwordReady) {
      setError("Password does not meet the requirements.")
      return
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    setIsLoading(true)
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
      setIsLoading(false)
      setError(data.error || "Could not create the account.")
      return
    }

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })
    setIsLoading(false)

    if (result?.error) {
      router.push(`/login?registered=1&email=${encodeURIComponent(email)}`)
      return
    }

    router.push("/profile")
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#396C03] to-[#2A5102] flex flex-col">
      <header className="w-full p-4 flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" aria-label="FastServe home">
          <Logo size={32} showWordmark={true} variant="onGreen" />
        </Link>
        <Link href="/" className="flex items-center text-white hover:text-white/80 transition-colors text-sm font-medium">
          <HugeiconsIcon icon={ArrowLeft01Icon} size={18} color="white" strokeWidth={2} className="mr-1.5" />
          Back to Home
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center p-4 py-8">
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <div className="pt-8 pb-4 px-8 text-center">
              <h1 className="text-3xl font-bold text-white mb-1">Join FastServe</h1>
              <p className="text-white/70">Create your account</p>
            </div>

            <div className="bg-white p-8 rounded-t-3xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                      {showPassword ? <HugeiconsIcon icon={ViewOffSlashIcon} size={20} color="currentColor" strokeWidth={2} /> : <HugeiconsIcon icon={ViewIcon} size={20} color="currentColor" strokeWidth={2} />}
                    </button>
                  </div>

                  <div className="mt-2 space-y-1">
                    {[
                      { met: hasMinLength, label: "At least 8 characters" },
                      { met: hasUpperCase, label: "At least 1 uppercase letter" },
                      { met: hasNumber, label: "At least 1 number" },
                      { met: hasSpecialChar, label: "At least 1 special character" },
                    ].map(({ met, label }) => (
                      <div key={label} className="flex items-center text-sm">
                        <div className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${met ? "bg-green-500" : "bg-gray-300"}`}>
                          {met && <HugeiconsIcon icon={Tick01Icon} size={12} color="white" strokeWidth={2} />}
                        </div>
                        <span className={met ? "text-green-600" : "text-gray-500"}>{label}</span>
                      </div>
                    ))}
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
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your password"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#396C03] focus:border-transparent transition-all"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <HugeiconsIcon icon={ViewOffSlashIcon} size={20} color="currentColor" strokeWidth={2} /> : <HugeiconsIcon icon={ViewIcon} size={20} color="currentColor" strokeWidth={2} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 mt-0.5 text-[#396C03] focus:ring-[#396C03] border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    I agree to the{" "}
                    <Link href="/terms" className="text-[#396C03] hover:text-[#2A5102] transition-colors">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#396C03] hover:text-[#2A5102] transition-colors">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#396C03] hover:bg-[#2A5102] text-white font-medium py-3 px-4 rounded-xl disabled:opacity-70 flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <HugeiconsIcon icon={Loading03Icon} size={20} color="white" strokeWidth={2} className="animate-spin mr-2" />
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

                <GoogleAuthButton label="Sign up with Google" />
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
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
