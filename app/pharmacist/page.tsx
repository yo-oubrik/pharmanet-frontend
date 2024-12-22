import {
  getCompletedOrdonnancesCount,
  getPendingOrdonnancesCount,
  getProcessingOrdonnancesCount,
  getRejectedOrdonnancesCount,
} from "../repo/ordonnances";
import PharmacistClientPage from "./PharmacistClientPage";

const PharmacistPage = async () => {
  const [
    pendingOrdersCount,
    processingOrdersCount,
    completedOrdersCount,
    rejectedOrdersCount,
  ] = await Promise.all([
    getPendingOrdonnancesCount(),
    getProcessingOrdonnancesCount(),
    getCompletedOrdonnancesCount(),
    getRejectedOrdonnancesCount(),
  ]);

  return (
    <PharmacistClientPage
      stats={{
        pendingOrdersCount,
        processingOrdersCount,
        completedOrdersCount,
        rejectedOrdersCount,
      }}
    />
  );
};

export default PharmacistPage;
