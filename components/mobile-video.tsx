"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export function MobileVideo() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const playPromiseRef = useRef<Promise<void> | undefined>()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = async () => {
      try {
        if (isPlaying) {
          // If there's a pending play promise, wait for it
          if (playPromiseRef.current) {
            await playPromiseRef.current
          }
          playPromiseRef.current = video.play()
          await playPromiseRef.current
        } else {
          // If there's a pending play promise, wait for it before pausing
          if (playPromiseRef.current) {
            await playPromiseRef.current
          }
          video.pause()
        }
      } catch (error) {
        console.error("Video playback error:", error)
        setError("Failed to play video")
        setIsPlaying(false)
      } finally {
        playPromiseRef.current = undefined
      }
    }

    // Set initial state
    video.muted = isMuted
    
    // Handle video loading
    const handleLoadedData = () => {
      console.log("Video loaded successfully")
      setIsLoaded(true)
      handlePlay()
    }

    video.addEventListener('loadeddata', handleLoadedData)
    
    // Initial play attempt
    handlePlay()

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      if (playPromiseRef.current) {
        playPromiseRef.current.then(() => video.pause())
      } else {
        video.pause()
      }
    }
  }, [isPlaying, isMuted])

  return (
    <div className="relative mx-auto w-[280px]">
      {/* Mobile Phone Frame */}
      <div className="relative rounded-[40px] border-[14px] border-gray-800 bg-gray-800 p-2 shadow-xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-gray-800"></div>
        
        {/* Screen */}
        <div className="relative aspect-[9/16] overflow-hidden rounded-[24px] bg-black">
          {/* Video Element */}
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={() => {
              console.log("Video loaded successfully")
              setIsLoaded(true)
            }}
            onError={(e) => {
              console.error("Video error event:", e)
              setError("Failed to load video")
            }}
          >
            <source src="/build.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Loading Overlay */}
          {!isLoaded && !error && (
            <div className="absolute inset-0 flex items-center justify-center bg-purple-900/80">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-900/80 text-white">
              <p className="text-center text-sm">{error}</p>
            </div>
          )}

          {/* Video Controls */}
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 