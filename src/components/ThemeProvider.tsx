import { useEffect } from "react"

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Example: Set theme based on system preference
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches
    document.documentElement.classList.toggle("dark", dark)
  }, [])
  return <>{children}</>
}
