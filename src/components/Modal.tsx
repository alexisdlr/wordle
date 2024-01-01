import { Fragment } from "react";
import { Dialog } from "@headlessui/react";
import { cn } from "../lib/utils";
import { useRootSelector } from "../hooks";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}
const Modal = ({ title, children, open, onClose }: ModalProps) => {
  const isDark = useRootSelector((state) => state.isDarkMode);

  return (
    <Dialog
      as="div"
      open={open}
      onClose={onClose}
      className={cn(isDark && "dark", "relative z-10")}
    >
      <div className="fixed inset-0 bg-black bg-opacity-25" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl border border-gainsboro border-opacity-25 bg-cultured-200  py-8 px-10 text-left align-middle shadow-xl transition-all dark:bg-space-cadet-200">
            <Dialog.Title className="text-center font-body text-3xl font-bold dark:text-white">
              {title}
            </Dialog.Title>
            <Fragment>{children}</Fragment>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
