import { Outlet } from "react-router-dom"
import { Nav } from "../Components/Nav/Nav"
export const Layout = () => {
    return (
        <div>
            <Outlet />
            <Nav />
        
        </div>
    )
}