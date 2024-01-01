import toast from "react-hot-toast";
import { useRootDispatch, useRootSelector } from "../hooks";
import { getDictionary } from "../lib/dictionary";
import {
  addKeyOnAnswer,
  removeKeyOnAnswer,
  submitWord,
} from "../store/game/slice";
import Keycap from "./KeyCap";
import { useEffect } from "react";

const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"];
const thirdRow = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"];

const Keyboard = () => {
  const currentWord = useRootSelector(
    (state) => state.answer[state.currentRow]
  );
  const hasWin = useRootSelector((state) => state.hasWin);
  const dispatch = useRootDispatch();

  useEffect(() => {
    const handler = async (event: KeyboardEvent) => {
      if (hasWin) return;

      if (!event.key.match(/[a-zA-Z]/)) {
        toast.error("La palabra no pertenece al alfabeto");
        return;
      }
      if (event.key === "CapsLock") return;
      if (event.key === "Shift") return;
      if (event.key === "Tab") return;
      if (event.key === "Enter") {
        if (currentWord.length === 5) {
          const dictionary = await getDictionary();
          if (dictionary.includes(currentWord.join(""))) {
            dispatch(submitWord());
            return;
          }
          toast.error("palabra no encontrada en el diccionario");
          return;
        }

        toast.error("insuficientes letras");

        return;
      }
      if (event.key === "Backspace") {
        if (currentWord.length !== 0) {
          dispatch(removeKeyOnAnswer());
        }
        return;
      }

      if (currentWord.length !== 5) {
        dispatch(addKeyOnAnswer(event.key.toUpperCase()));
      }
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  const handleClick = async (key: string) => {
    if (hasWin) return;
    if (key === "ENTER") {
      if (currentWord.length === 5) {
        const dictionary = await getDictionary();
        if (dictionary.includes(currentWord.join(""))) {
          dispatch(submitWord());
          return;
        }
        toast.error("Palabra no encontrada en el diccionario");
        return;
      }

      toast.error("insuficientes letras");

      return;
    }

    if (key === "DELETE") {
      if (currentWord.length !== 0) {
        dispatch(removeKeyOnAnswer());
      }
      return;
    }

    if (currentWord.length !== 5) {
      dispatch(addKeyOnAnswer(key));
    }
  };
  return (
    <div className="mt-14 grid gap-4 rounded-2xl bg-cultured-200 px-5 py-8 dark:bg-space-cadet-100">
      <div className="flex items-center justify-center space-x-2">
        {firstRow.map((value) => (
          <Keycap key={value} value={value} onClick={handleClick} />
        ))}
      </div>
      <div className="ml-12 flex items-center justify-center space-x-2">
        {secondRow.map((value) => (
          <Keycap key={value} value={value} onClick={handleClick} />
        ))}
      </div>
      <div className="ml-4 flex items-center justify-center space-x-2">
        {thirdRow.map((value) => (
          <Keycap key={value} value={value} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
