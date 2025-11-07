"use client"

import { useEffect, useState } from "react"

export function ShiftCountdown() {
  const [time, setTime] = useState({ hours: 0, minutes: 58, seconds: 12 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (num: number) => String(num).padStart(2, "0")

  return (
    <div className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-200 dark:bg-yellow-900 rounded-md">
      <span className="text-lg font-bold text-yellow-900 dark:text-yellow-100 tabular-nums">
        {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
      </span>
    </div>
  )
}
