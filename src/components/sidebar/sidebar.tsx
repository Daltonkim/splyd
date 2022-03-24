import { Link } from "react-router-dom"

export const SideBar = () => {
    return (
        <div>
            SideBar
            <Link to="/">Dashboard</Link>
            <Link to="/company">Company</Link>

        </div>
    )
}