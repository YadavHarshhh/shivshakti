"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export function VideoHero() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
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
        setIsPlaying(false)
      } finally {
        playPromiseRef.current = undefined
      }
    }

    // Set initial state
    video.muted = isMuted
    
    // Handle video loading
    const handleLoadedData = () => {
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
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Video Overlay */}
      <div className="absolute inset-0 z-10 bg-black/40"></div>

      {/* Embedded Canva Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src="/shiv1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-purple-900/80">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
        </div>
      )}

      {/* Video Controls */}
      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Welcome to Shiv Shakti Hostel</h1>
        <p className="mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
          Experience comfortable living with modern amenities in a secure and supportive environment
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="bg-amber-500 text-white hover:bg-amber-600">
            <Link href="/book-now">Book Your Stay</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
            <Link href="/virtual-tour">Take a Virtual Tour</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
