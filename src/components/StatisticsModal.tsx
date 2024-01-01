import { Modal } from ".";
import { useRootDispatch, useRootSelector } from "../hooks";
import { closeStatisticsModal } from "../store/game/slice";

interface StatisticsModalProps {
  minutes: number;
  seconds: number;
}

const StatisticsModal = ({ minutes, seconds }: StatisticsModalProps) => {
  const isOpen = useRootSelector((state) => state.modal === "statistics");
  const [matches, wins] = useRootSelector((state) => [
    state.matches,
    state.wins,
  ]);
  const [word, hasLose] = useRootSelector((state) => [
    state.word,
    state.hasLose,
  ]);
  const dispatch = useRootDispatch();

  const handleClose = () => {
    dispatch(closeStatisticsModal());
  };
  return (
    <Modal open={isOpen} title="Estadisticas" onClose={() => {}}>
      <div className="mt-4 flex px-4 justify-between dark:text-cultured-100">
        <div className="flex flex-col justify-center items-center">
          <span className="font-bold">{matches}</span> <p>Jugadas</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="font-bold">{wins}</span> <p>Victorias</p>
        </div>
      </div>
      <div className="my-4">
        {hasLose && <p>Has perdido la palabra era {word}</p>}
      </div>
      <div className="my-8 flex flex-col justify-center items-center dark:text-cultured-100">
        <p className="uppercase">Siguiente palabra</p>
        <span className="font-bold">
          {minutes}:{seconds}
        </span>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleClose}
          className="rounded bg-forest-green px-4 py-2 font-body text-lg font-bold uppercase text-white"
        >
          Aceptar
        </button>
      </div>
    </Modal>
  );
};

export default StatisticsModal;
