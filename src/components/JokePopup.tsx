import { useState } from "react"

export default function JokePopup({ joke }: { joke: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded bg-sky-500 text-white px-2 py-1"
      >
        Show Joke
      </button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg max-w-md w-full">
            <h2 className="text-lg font-bold mb-2">Random Joke</h2>
            <p>{joke}</p>
            <button
              onClick={() => setOpen(false)}
              className="mt-4 px-3 py-1 rounded bg-blue-300 dark:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
