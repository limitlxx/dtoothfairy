'use client'

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  initialHours: number
  initialMinutes: number
  initialSeconds: number
}

export function CountdownTimer({ initialHours, initialMinutes, initialSeconds }: CountdownTimerProps) {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        const newSeconds = prevTime.seconds - 1
        const newMinutes = newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours

        return {
          hours: newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-white text-4xl font-bold">
      {String(time.hours).padStart(2, '0')}h : {String(time.minutes).padStart(2, '0')}m : {String(time.seconds).padStart(2, '0')}s
    </div>
  )
}

