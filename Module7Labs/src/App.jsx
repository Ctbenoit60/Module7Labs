import "./App.css";
import BitcoinRates from "./components/BitcoinRates";
import Emoji from "./components/Emoji";
import NavBar from "./components/NavBar";
import { EmojiProvider } from "./context/EmojiContext";
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <>
    <NavBar/>
    <AppRoutes/>  
      <BitcoinRates/>
      <EmojiProvider>
      <Emoji />
    </EmojiProvider>
    </>
  );
}

export default App;
