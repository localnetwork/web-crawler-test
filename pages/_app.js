import "@/styles/globals.css";
import { useEffect, useMemo, useState } from "react";

const detectBot = () => {
  if (typeof window === "undefined") return false;

  const userAgent = navigator.userAgent.toLowerCase();
  const botPatterns = [
    "bot",
    "crawler",
    "spider",
    "headless",
    "slurp",
    "googlebot",
    "bingbot",
    "yandex",
    "baidu",
  ];

  return botPatterns.some((pattern) => userAgent.includes(pattern));
};

const BotAlert = () => (
  <div className="bg-red-500 text-white p-2">Bot detected!</div>
);

export default function App({ Component, pageProps }) {
  const [isBot, setIsBot] = useState(false);

  useEffect(() => {
    setIsBot(detectBot());
  }, []);

  return (
    <div>
      {isBot && <BotAlert />}
      <Component {...pageProps} />
    </div>
  );
}
