import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyThemeContext } from "../context/ThemeContext";

export default function NavBar(){
  const {theme} = useContext(MyThemeContext)

  return (
    <nav style={{backgroundColor: theme.background, color: theme.foreground}}>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </nav>
  )
}