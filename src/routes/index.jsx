import { Route, Routes } from "react-router-dom"
import Rootlayout from "../layouts/Rootlayout"
import { Home,Signup,Login } from "../pages"

export default function RootRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Rootlayout />}>
                <Route index element={<Home />} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>}></Route>
            </Route>
        </Routes>
    )
}