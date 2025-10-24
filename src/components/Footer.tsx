export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 rounded-t-lg shadow p-4 mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          &copy; {new Date().getFullYear()} Davina Leong. All rights reserved.
        </div>
        <nav className="flex gap-4">
          <a href="https://linkedin.com/in/davinaleong">LinkedIn</a>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://youtube.com">YouTube</a>
          <a href="https://threads.net">Threads</a>
          <a href="https://tiktok.com">TikTok</a>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
        </nav>
      </div>
    </footer>
  )
}
