import { Toaster } from "react-hot-toast";
import { useRootSelector } from "../hooks";

const ToasterProvider = () => {
  const isDark = useRootSelector((state) => state.isDarkMode);

  return (
    <Toaster
      toastOptions={{
        style: {
          backgroundColor: isDark ? "#000" : "#fff",
          color: isDark ? "#fff" : "#000",
        },
      }}
    />
  );
};

export default ToasterProvider;
