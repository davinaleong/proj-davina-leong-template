export default function Pagination({
  current,
  total,
  onPage,
}: {
  current: number
  total: number
  onPage: (n: number) => void
}) {
  // Custom pagination style: 1 2 ... 4 ... 6 7
  const pages = []
  for (let i = 1; i <= total; i++) {
    if (
      i === 1 ||
      i === 2 ||
      i === total - 1 ||
      i === total ||
      Math.abs(i - current) <= 1
    ) {
      pages.push(i)
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...")
    }
  }
  return (
    <nav className="flex gap-2 mt-4">
      {pages.map((p, idx) =>
        p === "..." ? (
          <span key={idx} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={idx}
            className={`px-2 py-1 rounded ${
              p === current
                ? "bg-blue-300 dark:bg-blue-700"
                : "bg-slate-100 dark:bg-slate-800"
            }`}
            onClick={() => typeof p === "number" && onPage(p)}
          >
            {p}
          </button>
        )
      )}
    </nav>
  )
}
