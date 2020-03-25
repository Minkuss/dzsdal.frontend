import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useStore } from "effector-react";

import { ProfileBlock } from "../components";
import { $teacher } from "../effector/teacher";

export const TeacherProfileBlock: React.FC = () => {
  const teacher = useStore($teacher);
  const history = useHistory();
  const quit = useCallback(() => {
    history.goBack();
  }, []);

  return <ProfileBlock onChange={quit} userName={teacher ? teacher.name : ""} />;
};
