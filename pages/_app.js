import "@/styles/globals.css";
import { useEffect, useMemo, useState } from "react";
import { isbot } from "isbot";

const BotAlert = () => (
  <div className="bg-red-500 text-white p-2">Bot detected!</div>
);

export default function App({ Component, pageProps }) {
  const [bot, setBot] = useState(false);

  useEffect(() => {
    setBot(isbot(navigator.userAgent));
  }, []);
  return (
    <div>
      {bot ? <BotAlert /> : <div>Not Bot</div>}
      <Component {...pageProps} />
    </div>
  );
}
