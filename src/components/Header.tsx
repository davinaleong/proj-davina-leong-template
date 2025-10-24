import { Search, Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-blue-300 dark:bg-slate-900 rounded-b-lg shadow p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src="/assets/images/dav-coloured.svg"
          alt="Brand"
          className="h-8"
        />
        <nav className="flex gap-4">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/articles">Articles</a>
          <a href="/tools">Tools</a>
          <a href="/notebooks">Python</a>
          <a href="/faith">Faith</a>
          <button title="Random Joke" className="ml-2">
            <Menu />
          </button>
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="search"
          placeholder="Search..."
          className="rounded px-2 py-1"
        />
        <Search />
      </div>
    </header>
  )
}
