import Button from "@mui/material/Button";

import { useAppDispatch, useAppSelector } from "src/hooks/useStore";

import { undoChange } from "src/redux/_thunks/curriculumDetailChangeHistory.thunk";

const UndoButton = () => {
  const dispatch = useAppDispatch();

  const currentIndex = useAppSelector(
    (store) => store.curriculums.curriculumDetail.changeHistory.currentIndex
  );

  const handleClick = () => {
    dispatch(undoChange());
  };

  return (
    <>
      <Button
        size="small"
        color="info"
        aria-haspopup="true"
        onClick={handleClick}
        disabled={currentIndex < 0}
      >
        Undo
      </Button>
    </>
  );
};

export default UndoButton;
