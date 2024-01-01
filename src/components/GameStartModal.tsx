import useRootDispatch from "../hooks/useRootDispatch";
import useRootSelector from "../hooks/useRootSelector";
import { closeStartGameModal } from "../store/game/slice";
import CharacterBox from "./CharacterBox";
import Modal from "./Modal";

const GameStartModal = () => {
  const isOpen = useRootSelector((state) => state.modal === "start-game");
  const dispatch = useRootDispatch();
  const handleClose = () => {
    dispatch(closeStartGameModal());
  };
  return (
    <Modal title="¿Como jugar?" open={isOpen} onClose={() => {}}>
      <div className="mt-4 flex flex-col justify-center text-sm gap-y-3 font-body dark:text-white text-space-cadet-200 items-start">
        <p>Adivina la palabra oculta en cinco intentos.</p>
        <p>Cada intento debe ser una palabra válida de 5 letras.</p>
        <p>
          Después de cada intento el color de las letras cambia para mostrar qué
          tan cerca estás de acertar la palabra.
        </p>
      </div>
      <div className="mt-4">
        <p className="text-base font-semibold dark:text-white">Ejemplos</p>
        <div className="grid grid-cols-5 gap-x-2 mt-3">
          <CharacterBox value="G" validation="right" />
          <CharacterBox value="A" />
          <CharacterBox value="T" />
          <CharacterBox value="O" />
          <CharacterBox value="S" />
        </div>
        <p className="text-sm dark:text-white text-left my-4">
          La letra <span className="font-bold">G</span> está en la palabra y en
          la posición correcta.
        </p>
        <div className="grid grid-cols-5 gap-x-2 mt-3">
          <CharacterBox value="V" />
          <CharacterBox value="O" />
          <CharacterBox value="C" validation="wrong" />
          <CharacterBox value="A" />
          <CharacterBox value="L" />
        </div>
        <p className="text-sm dark:text-white text-left my-4">
          La letra <span className="font-bold">C</span> está en la palabra pero
          en la posición incorrecta.
        </p>
        <div className="grid grid-cols-5 gap-x-2 mt-3">
          <CharacterBox value="C" />
          <CharacterBox value="A" />
          <CharacterBox value="N" />
          <CharacterBox value="T" />
          <CharacterBox value="O" validation="not-found" />
        </div>
        <p className="text-sm dark:text-white text-left my-4">
          La letra <span className="font-bold">o</span> no está en la palabra.
        </p>
        <p className="text-sm dark:text-white text-left my-4">
          Puede haber letras repetidas. Las pistas son independientes para cada
          letra.
        </p>
        <p className="text-sm dark:text-white text-center py-4">
          ¡Una palabra nueva cada 5 minutos!
        </p>
      </div>
      <div className="mt-2 flex justify-center items-center">
        <button
          className="rounded bg-forest-green px-4 py-2 font-body text-lg font-bold uppercase text-white"
          onClick={handleClose}
        >
          !Jugar¡
        </button>
      </div>
    </Modal>
  );
};

export default GameStartModal;
