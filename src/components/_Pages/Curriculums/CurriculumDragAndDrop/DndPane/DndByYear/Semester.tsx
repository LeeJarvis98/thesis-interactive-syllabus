import type { FC } from "react";

import { memo, forwardRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Droppable } from "react-beautiful-dnd";

import CourseTile from "./CourseTile";
import CourseTileAdd from "./CourseTileAdd";
import { useAppSelector, useAppDispatch } from "src/hooks/useStore";
import { setModalAddCourse } from "src/redux/curriculums.slice";

interface ICourseListContainerProps {
  isdraggingover: boolean;
  [otherProps: string]: any;
}

const CourseListContainer = forwardRef(
  (props: ICourseListContainerProps, ref) => {
    return (
      <Box
        {...props}
        ref={ref}
        display={`flex`}
        justifyContent="center"
        flexDirection={`column`}
        sx={{
          transition: "background-color 0.2s ease",
          backgroundColor: () =>
            props.isdraggingover.toString() === "true" ? "dimgray" : "inherit",
          "&:hover": {
            backgroundColor: "lightslategrey",
          },
        }}
      >
        {props.children}
      </Box>
    );
  }
);

interface ISemesterProps {
  yearId: string;
  yearIndex: number;
  semId: string;
  index: number;
}
const Semester: FC<ISemesterProps> = ({
  yearId,
  yearIndex,
  semId,
  index: semIndex,
}) => {
  const dispatch = useAppDispatch();
  const years = useAppSelector(
    (state) => state.curriculums.curriculumDetail.years
  );
  const courses = useAppSelector((state) => state.courses.courses);

  const { courseIds, creditLimit } = years.byId[yearId].semesters.byId[semId];

  const getCreditCount = (): number => {
    let creditCount: number = 0;
    courseIds.forEach((courseId) => {
      creditCount += courses.byId[courseId].credit.theory;
      creditCount += courses.byId[courseId].credit.practice;
    });
    return creditCount;
  };

  const openModalAddCourse = () => {
    dispatch(
      setModalAddCourse({
        isOpen: true,
        yearId,
        yearIndex,
        semId,
        semIndex: semIndex,
      })
    );
  };

  return (
    <Box>
      <Typography variant="body1" align="center">
        Sem {semIndex + 1}
      </Typography>
      <Droppable
        droppableId={`${yearId} ${semId}`}
        type={`move-semester-course`}
      >
        {(provided, snapshot) => {
          return (
            <CourseListContainer
              ref={provided.innerRef}
              {...provided.droppableProps}
              // I don't know why the warning console forces me to set "isDraggingOver"
              // to lowercase and convert boolean to string. Weird.
              isdraggingover={snapshot.isDraggingOver}
            >
              {courseIds.map((courseId, index) => {
                return (
                  <CourseTile
                    key={courseId}
                    courseId={courseId}
                    index={index}
                    yearId={yearId}
                    yearIndex={yearIndex}
                    semId={semId}
                    semIndex={semIndex}
                  />
                );
              })}
              {provided.placeholder}
              <CourseTileAdd onClick={openModalAddCourse} />
            </CourseListContainer>
          );
        }}
      </Droppable>
      <Typography
        variant={`body2`}
        align={`center`}
        component={`div`}
        sx={(theme) => ({
          color:
            getCreditCount() <= creditLimit
              ? theme.palette.success.light
              : theme.palette.error.light,
        })}
      >
        <Box fontWeight="fontWeightBold">{`${getCreditCount()} / ${creditLimit}`}</Box>
      </Typography>
    </Box>
  );
};

export default memo(Semester);
