import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";

export default function Home() {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav>

      </nav>
      <main>

      </main>
    </div>
  )
}
