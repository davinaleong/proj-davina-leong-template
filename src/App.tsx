import Header from "./components/Header"
import Footer from "./components/Footer"
import ThemeProvider from "./components/ThemeProvider"
import Card from "./components/Card"
import JokePopup from "./components/JokePopup"
import Pagination from "./components/Pagination"

function App() {
  // Dummy data for demonstration
  const dummyProjects = [
    {
      title: "Project One",
      description: "A cool project.",
      image: "/assets/images/rect-placeholder.png",
    },
    {
      title: "Project Two",
      description: "Another cool project.",
      image: "/assets/images/rect-placeholder.png",
    },
  ]
  const dummyArticles = [
    {
      title: "Article One",
      description: "A helpful article.",
      image: "/assets/images/rect-placeholder.png",
    },
    {
      title: "Article Two",
      description: "Another helpful article.",
      image: "/assets/images/rect-placeholder.png",
    },
  ]
  const dummyTools = [{ title: "Tool One", description: "A handy tool." }]
  const dummyNotebooks = [
    { title: "Notebook One", description: "A data science notebook." },
  ]
  const dummySermons = [
    { title: "Sermon One", description: "A message of hope." },
    { title: "Sermon Two", description: "A message of faith." },
    { title: "Sermon Three", description: "A message of love." },
  ]
  const dummyJoke =
    "Why did the dev cross the road? Because the code was on the other side!"

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-accent-light dark:bg-accent-dark text-typography-dark dark:text-typography-light flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto p-4 space-y-8">
          <section className="hero text-center py-8">
            <h1 className="text-4xl font-bold mb-2">
              Welcome to the Template!
            </h1>
            <p className="text-lg">
              A simple, professional, and fun starter for your content.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Featured & Latest Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dummyProjects.map((p, i) => (
                <Card
                  key={i}
                  title={p.title}
                  description={p.description}
                  image={p.image}
                />
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Featured & Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dummyArticles.map((a, i) => (
                <Card
                  key={i}
                  title={a.title}
                  description={a.description}
                  image={a.image}
                />
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Latest Tool</h2>
            <Card
              title={dummyTools[0].title}
              description={dummyTools[0].description}
            />
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Latest Notebook</h2>
            <Card
              title={dummyNotebooks[0].title}
              description={dummyNotebooks[0].description}
            />
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Featured & Latest Sermons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dummySermons.map((s, i) => (
                <Card key={i} title={s.title} description={s.description} />
              ))}
            </div>
          </section>
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Random Joke</h2>
            <JokePopup joke={dummyJoke} />
          </section>
          <section className="flex justify-center">
            <Pagination current={2} total={7} onPage={() => {}} />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
