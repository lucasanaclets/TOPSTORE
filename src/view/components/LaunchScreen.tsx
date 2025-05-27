import { Transition } from "@headlessui/react";
import { Spinner } from "./Spinner";

interface LaunchScreenProps {
  isLoading: boolean;
}

export function LaunchScreen({ isLoading }: LaunchScreenProps) {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="bg-blue-150 fixed top-0 e left-0 w-full h h-full grid place-items-center">
        <div className="flex flex-col items-center">
          <Spinner className="text-blue-150 fill-white w-7 h-7" />
        </div>
      </div>
    </Transition>
  );
}
