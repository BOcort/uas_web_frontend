import { Outlet } from "react-router-dom"
import { Header,Footer } from "../components"
export default function Rootlayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}