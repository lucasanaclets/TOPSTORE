import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

export function SliderNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-start bg-white z-10 outline-none"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeftIcon className="w-5 h-5 text-gray-800" />
      </button>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-end bg-white z-10 outline-none"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRightIcon className="w-5 h-5 text-gray-800" />
      </button>
    </>
  );
}
