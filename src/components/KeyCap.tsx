import { useRootSelector } from "../hooks";
import { cn } from "../lib/utils";

const Keycap = ({ value, onClick }: KeycapProps) => {
  const keyValidation = useRootSelector(
    (state) => state.keyboardValidation[value]
  );

  return (
    <span
      onClick={() => onClick(value)}
      className={cn(
        keyValidation === "right"
          ? "bg-forest-green text-white"
          : keyValidation === "wrong"
          ? "bg-old-gold text-white"
          : keyValidation === "not-found"
          ? "bg-davys-grey text-white"
          : "bg-light-gray dark:bg-independence",
        "cursor-pointer rounded-lg  px-4 py-3 font-body font-medium text-davys-grey  dark:text-white"
      )}
    >
      {value}
    </span>
  );
};

type KeycapProps = {
  value: string;
  onClick: (key: string) => void;
};

export default Keycap;
