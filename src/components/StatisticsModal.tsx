import { Modal } from ".";
import { useRootSelector } from "../hooks";

const StatisticsModal = () => {
  const isOpen = useRootSelector((state) => state.modal === "statistics");

  return (
    <Modal open={isOpen} title="Estadisticas" onClose={() => {}}>
      <div></div>
    </Modal>
  );
};

export default StatisticsModal;
