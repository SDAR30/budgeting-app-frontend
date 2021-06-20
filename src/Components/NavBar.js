import { NavLink } from "react-router-dom"
import "./NavBar.css"
export default function NavBar() {


  return (
    <nav className="navbar">
      <NavLink className="navlink" exact to="/">Home</NavLink>
      <NavLink className="navlink" exact to="/transactions">Transactions</NavLink>
      <NavLink className="navlink" exact to="/transactions/new">New Transaction</NavLink>
    </nav>
  )
}