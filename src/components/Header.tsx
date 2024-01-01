import { HelpCircle, GanttChartSquare } from "lucide-react";
import SwitchTheme from "./SwitchTheme";
import useRootSelector from "../hooks/useRootSelector";
import useRootDispatch from "../hooks/useRootDispatch";
import { openStartGameModal, toggleDarkMode } from "../store/game/slice";

const Header = () => {
  const darkEnabled = useRootSelector((state) => state.isDarkMode);
  const dispatch = useRootDispatch();
  return (
    <header className="mt-10 grid grid-cols-3 rounded-2xl bg-cultured-200 py-4 px-6 dark:bg-space-cadet-100">
      <div 
        onClick={() => dispatch(openStartGameModal())}
      className="col-span-1 flex items-center text-space-cade-100 dark:text-cultured-100">
        <HelpCircle
          className="size-6 cursor-pointer"
          
        />
      </div>
      <div className="cols-span-2 flex items-center justify-center">
        <h1 className="font-body text-4xl font-bold uppercase tracking-widest leading-10 text-space-cadet-200 dark:text-gainsboro">
          Wordle
        </h1>
      </div>
      <div className="cols-span-1 flex items-center gap-x-2 justify-end text-space-cade-100 dark:text-cultured-100">
        <GanttChartSquare className="size-6" />
        <SwitchTheme
          checked={darkEnabled}
          onChange={() => dispatch(toggleDarkMode())}
          description="dark/light"
        />
      </div>
    </header>
  );
};

export default Header;
