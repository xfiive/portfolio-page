"use client"

import { useState } from "react"

interface EmailFormData {
  name: string
  email: string
  message: string
}

export const useEmailService = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendEmail = async (formData: EmailFormData) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email")
      }

      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false), 3000)
      return true
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred")
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return {
    sendEmail,
    isLoading,
    isSuccess,
    error,
  }
}
