import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import LatestNews from "../Components/LatestNews/LatestNews";
import Navbar from "../Components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="w-11/12 mx-auto font-poppins">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="grid md:grid-cols-12 gap-3">
        <aside className="col-span-3 bg-red-400">left side</aside>
        <section className="col-span-6 bg-green-300">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 bg-purple-500">right side</aside>
      </main>
    </div>
  );
}
