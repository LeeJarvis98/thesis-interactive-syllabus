import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import { useAppDispatch } from "src/hooks/useStore";

import { CurriculumCommandType } from "src/constants/curriculum.const";
import { commitChangeToHistory } from "src/redux/curriculumChangeHistory.slice";

const AddYearButton = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      commitChangeToHistory({
        type: CurriculumCommandType.ADD_YEAR,
        patch: {},
      })
    );
  };

  return (
    <>
      <Button
        size="small"
        variant="outlined"
        sx={(theme) => ({
          borderColor: grey["A200"],
          bgcolor: grey["A200"],
          color: "black",
          ":hover": {
            borderColor: grey["A400"],
            bgcolor: grey["A400"],
            // color: "white",
          },
        })}
        aria-haspopup="true"
        startIcon={<AddIcon />}
        onClick={handleClick}
      >
        Add Year
      </Button>
    </>
  );
};

export default AddYearButton;
