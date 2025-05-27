import "swiper/swiper-bundle.css";
import { MONTHS } from "../../../../../../app/config/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Modal } from "../../../../../components/Modal";
import { useSalesReportModalController } from "./useSalesReportModalController";
import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { formatCurrency } from "../../../../../../app/utils/formatCurrency";
import { Spinner } from "../../../../../components/Spinner";
import EmptyStateImage from "../../../../../../assets/empty-state.svg";

export function SalesReportModal() {
  const {
    isSalesReportModalOpen,
    closeSalesReportModal,
    handleChangeYear,
    selectedYear,
    handleChangeMonth,
    filters,
    isLoading,
    salesReport,
  } = useSalesReportModalController();

  const hasSalesReport = salesReport.orders > 0;

  return (
    <Modal
      title="Relatório de Vendas"
      open={isSalesReportModalOpen}
      onClose={closeSalesReportModal}
    >
      <div className="relative">
        <div className="w-full flex items-center justify-between">
          <div className="flex-1 text-center">
            <span className="text-sm h-7 sm:h-9 text-gray-800 tracking-[-0.5px] font-medium">
              {selectedYear}
            </span>
          </div>

          <button
            onClick={() => handleChangeYear(-1)}
            className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-start absolute lelf-0 top-1/2 -translate-y-1/2 outline-none"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleChangeYear(1)}
            className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-end absolute right-0 top-1/2 -translate-y-1/2 outline-none"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mt-6 relative">
        <Swiper
          slidesPerView={3}
          centeredSlides
          initialSlide={filters.month}
          onSlideChange={(swiper) => {
            handleChangeMonth(swiper.realIndex);
          }}
        >
          <SliderNavigation />
          {MONTHS.map((month, index) => (
            <SwiperSlide key={month}>
              {({ isActive }) => (
                <SliderOption isActive={isActive} month={month} index={index} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center mt-12 h-[320px]">
          <Spinner className="w-7 h-7" />
        </div>
      )}

      {!isLoading && !hasSalesReport && (
        <div className="flex flex-col gap-4 items-center justify-center mt-12 h-[320px]">
          <img src={EmptyStateImage} alt="Empty State" className="w-[120px]" />
          <h1 className="text-center">
            Não há estatísticas para o periodo selecionado.
          </h1>
        </div>
      )}

      {!isLoading && hasSalesReport && (
        <div className="mt-10 flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center gap-3 w-full">
            <strong className="text-gray-800 tracking-[-0.5px]">
              Número de pedidos:
            </strong>
            <span className="text-xl text-gray-800 tracking-[-0.5px]">
              {salesReport!.orders}
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 w-full">
            <strong className="text-gray-800 tracking-[-0.5px]">
              Faturamento:
            </strong>
            <span className="text-xl text-gray-800 tracking-[-0.5px]">
              {formatCurrency(salesReport!.billing)}
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 w-full">
            <strong className="text-gray-800 tracking-[-0.5px]">
              Modelo(s) mais vendido(s):
            </strong>
            <span className="text-xl text-gray-800 tracking-[-0.5px] text-center">
              {salesReport!.best_selling_models.join(", ")}.
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 w-full">
            <strong className="text-gray-800 tracking-[-0.5px]">
              Cor(es) mais vendida(s):
            </strong>
            <span className="text-xl text-gray-800 tracking-[-0.5px] text-center">
              {salesReport!.best_selling_colors.join(", ")}.
            </span>
          </div>
        </div>
      )}
    </Modal>
  );
}
