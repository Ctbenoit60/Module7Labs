import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { MyThemeContext } from "../context/ThemeContext";
import { AppBar, Toolbar, Button } from '@mui/material';


// export default function NavBar(){
//   // const {theme} = useContext(MyThemeContext)

//   return (
//     <nav style={{backgroundColor: theme.background, color: theme.foreground}}>
//       <ul>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//         <li><NavLink to="/login">Login</NavLink></li>
//       </ul>
//     </nav>
//   )
// }

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={NavLink} to="/">Home</Button>
        <Button color="inherit" component={NavLink} to="/login">Login</Button>
        <Button color="inherit" component={NavLink} to="/bitcoin-rates">Bitcoin Rates</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;