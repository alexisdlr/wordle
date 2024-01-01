import { useEffect } from "react";
import { useTimer } from 'react-timer-hook';
import toast, { Toaster } from "react-hot-toast";
import { GameStartModal, Header, GridSection, Keyboard } from "./components";
import { useRootDispatch, useRootSelector } from "./hooks";
import { cn, getRandom } from "./lib/utils";
import { getDictionary } from "./lib/dictionary";
import { restartMatch, setWord } from "./store/game/slice";

function App() {
  const isDark = useRootSelector((state) => state.isDarkMode);
  const dispatch = useRootDispatch();
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);

  const { minutes, seconds, restart } = useTimer({
    expiryTimestamp: time,
    autoStart: true,
  });

  useEffect(() => {
    (async function () {
      const words = await getDictionary();
      const randomWord = getRandom<string>(words);
      dispatch(setWord(randomWord.toUpperCase()));
    })();
  }, []);

  useEffect(() => {
    (async function () {
      if (minutes === 0) {
        const words = await getDictionary();
        const randomWord = getRandom<string>(words);
        dispatch(restartMatch());
        dispatch(setWord(randomWord.toUpperCase()));
        toast.success("Nueva palabra generada!");
        restart(time);
      }
    })();
  }, [minutes]);
  return (
    <div
      className={cn(
        isDark && "dark",
        "transition-colors duration-500 ease-in-out h-full"
      )}
    >
      <div className="flex flex-col bg-cultured-100 dark:bg-space-cadet-200 items-center justify-center mx-auto">
        <Header />
        <GridSection />
        <Keyboard />
      </div>
      <GameStartModal />
      <div>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
