import { useEffect, useState } from "react";
import { useAdminDashboardContext } from "../../components/AdminDashboardContext/useAdminDashboardContext";
import { SalesReportFilters } from "../../../../../../app/services/productsService/getSalesReport";
import { useQuery } from "@tanstack/react-query";
import { productsService } from "../../../../../../app/services/productsService";

export function useSalesReportModalController() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [filters, setFilters] = useState<SalesReportFilters>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const { isSalesReportModalOpen, closeSalesReportModal } =
    useAdminDashboardContext();

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["salesReport"],
    queryFn: () => productsService.getSalesReport(filters),
    enabled: false,
  });

  function handleChangeMonth(month: number) {
    setFilters((prevState) => ({
      ...prevState,
      month,
    }));
  }

  function handleChangeYear(step: number) {
    setSelectedYear((prevState) => prevState + step);
    setFilters((prevState) => ({
      ...prevState,
      year: selectedYear + step,
    }));
  }

  useEffect(() => {
    if (isSalesReportModalOpen) {
      refetch();
    }
  }, [filters, refetch, isSalesReportModalOpen]);

  return {
    isSalesReportModalOpen,
    closeSalesReportModal,
    handleChangeYear,
    selectedYear,
    handleChangeMonth,
    filters,
    salesReport: data ?? {
      orders: 0,
      billing: 0,
      best_selling_models: [],
      best_selling_colors: [],
    },
    isLoading: isFetching,
  };
}
