import { Fragment } from "react";
import CharacterBox from "./CharacterBox";
import useRootSelector from "../hooks/useRootSelector";
import { nanoid } from "nanoid";

const GridSection = () => {
  const [answer, validation] = useRootSelector(state => [
    state.answer,
    state.validation
  ]);
  return (
    <div className="mx-auto mt-10 grid max-w-md grid-cols-5 grid-rows-5 gap-2 px-6">
        {Array.from({ length: 5 }).map((_, row) => (
        <Fragment key={row}>
          {Array.from({ length: 5 }).map((_, column) => (
            <CharacterBox
              key={`${answer[row][column] ?? column}` + nanoid(5)}
              value={answer[row][column] ?? ''}
              validation={validation[row][column]}
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default GridSection;
