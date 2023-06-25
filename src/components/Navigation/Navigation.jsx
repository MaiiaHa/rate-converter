import { NavLink, Outlet } from "react-router-dom";

export default function Navigation() {
    return (
        <>
        <nav>
            <NavLink
              to="/"
            >
                Home
            </NavLink>

            <NavLink
              to="/rates"
            >
                Rates
            </NavLink>
        </nav>
       
             <Outlet/>
        
        </>
    )
}