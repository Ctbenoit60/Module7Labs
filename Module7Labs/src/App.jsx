import "./App.css";
import BitcoinRates from "./components/BitcoinRates";
import Emoji from "./components/Emoji";
import { EmojiProvider } from "./context/EmojiContext";

function App() {
  return (
    <>
      <BitcoinRates></BitcoinRates>
      <EmojiProvider>
      {/* Your other components go here */}
      <Emoji />
    </EmojiProvider>
    </>
  );
}

export default App;
