import { Switch } from "@headlessui/react";
import { cn } from "../lib/utils";
interface SwitchProps {
  className?: string;
  classNamesChecked?: string;
  classNamesUnchecked?: string;
  checked: boolean;
  onChange: () => void;
  description: string;
};
const SwitchTheme = ({ checked = false, onChange, description }: SwitchProps) => {
  return ( 
    <Switch
    checked={checked}
    onChange={onChange}
    className={`${
      checked ? 'bg-blue-600' : 'bg-gray-200'
    } relative inline-flex h-6 w-11 items-center rounded-full`}
  >
      <span className="sr-only">{description}</span>
      <span
        className={cn(
          checked ? 'translate-x-6' : 'translate-x-1',
          'inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out'
        )}
      />
  </Switch>
   );
}
 
export default SwitchTheme;