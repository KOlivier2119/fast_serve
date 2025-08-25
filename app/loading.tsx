"use client"

import { useState, useEffect } from "react"

const AdvancedLoading = () => {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing")

  const loadingStages = [
    "Initializing...",
    "Loading resources...",
    "Preparing interface...",
    "Almost ready...",
    "Finalizing...",
  ]

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 300)

    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        const currentIndex = loadingStages.indexOf(prev)
        const nextIndex = (currentIndex + 1) % loadingStages.length
        return loadingStages[nextIndex]
      })
    }, 1200)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [])

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#396C03] via-[#4a7d04] to-[#2d5502] relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main loading container */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Advanced spinner */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-24 h-24 border-4 border-white/20 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-6 h-6 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Inner ring */}
          <div
            className="absolute inset-2 w-16 h-16 border-4 border-green-200/40 rounded-full animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          >
            <div className="absolute top-0 left-0 w-4 h-4 bg-green-200 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Center pulse */}
          <div className="absolute inset-6 w-12 h-12 bg-white/30 rounded-full animate-pulse flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-80 max-w-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/90 text-sm font-medium">{loadingText}</span>
            <span className="text-white/70 text-sm">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-white to-green-200 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-white/80 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>

        {/* Status text with typewriter effect */}
        <div className="text-center">
          <p className="text-white/60 text-xs tracking-wider uppercase">
            Please wait while we prepare everything for you
          </p>
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent pointer-events-none"></div>
    </div>
  )
}

export default AdvancedLoading
