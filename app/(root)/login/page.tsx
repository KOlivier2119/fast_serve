"use client"

import type React from "react"
import { useEffect, useState } from "react"
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
} from "@hugeicons/core-free-icons"

const LoginPage = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [notice, setNotice] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get("registered") === "1") {
      setNotice("Your account was created. Sign in to continue.")
    }
    const emailParam = params.get("email")
    if (emailParam) setEmail(emailParam)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })
    setIsLoading(false)
    if (result?.error) {
      setError("Email or password is incorrect.")
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

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <div className="pt-8 pb-4 px-8 text-center">
              <h1 className="text-3xl font-bold text-white mb-1">Welcome back</h1>
              <p className="text-white/70">Sign in to your account</p>
            </div>

            <div className="bg-white p-8 rounded-t-3xl">
              <form onSubmit={handleSubmit} className="space-y-5">
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#396C03] focus:border-transparent transition-all"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <HugeiconsIcon icon={ViewOffSlashIcon} size={20} color="currentColor" strokeWidth={2} /> : <HugeiconsIcon icon={ViewIcon} size={20} color="currentColor" strokeWidth={2} />}
                    </button>
                  </div>
                </div>

                {notice && <p className="text-sm text-[#396C03]">{notice}</p>}
                {error && <p className="text-sm text-red-600">{error}</p>}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#396C03] hover:bg-[#2A5102] text-white font-medium py-3 px-4 rounded-xl disabled:opacity-70 flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <HugeiconsIcon icon={Loading03Icon} size={20} color="white" strokeWidth={2} className="animate-spin mr-2" />
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </button>

                <div className="relative flex items-center justify-center">
                  <div className="border-t border-gray-300 absolute w-full"></div>
                  <div className="bg-white px-4 relative text-sm text-gray-500">or continue with</div>
                </div>

                <GoogleAuthButton label="Sign in with Google" />
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Don&apos;t have an account?{" "}
                  <Link href="/register" className="font-medium text-[#FF8B00] hover:text-[#E07A00] transition-colors">
                    Sign up
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

export default LoginPage
