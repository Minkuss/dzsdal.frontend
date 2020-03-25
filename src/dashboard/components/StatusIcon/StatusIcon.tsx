import React, { useMemo } from "react";
import { Intent, Icon, IconName } from "@blueprintjs/core";

import { Status, UserRole } from "../../types";

interface IStatusIconProps {
  status: Status;
  role: UserRole;
}

export const StatusIcon: React.FC<IStatusIconProps> = ({ status, role }) => {
  const iconName = useMemo(() => getStatusIconName(role, status), [status]);
  const iconIntent = useMemo(() => getStatusIconIntent(role, status), [status]);
  const iconTitle = useMemo(() => getStatusIconTitle(role, status), [status]);

  return <Icon iconSize={12} icon={iconName} intent={iconIntent} htmlTitle={iconTitle} />;
};

function getStatusIconTitle(role: UserRole, status: Status): string | undefined {
  switch (status) {
    default:
      return;
    case role === "student" ? Status.StudentUpdated : Status.TeacherUpdated:
      return "Обновлено";
    case Status.Checked:
      return "Проверено";
    case Status.CheckedAndViewed:
      return "Проверено и просмотрено";
  }
}

function getStatusIconName(role: UserRole, status: Status): IconName | undefined {
  switch (status) {
    default:
      return;
    case role === "student" ? Status.StudentUpdated : Status.TeacherUpdated:
      return "error";
    case Status.Checked:
    case Status.CheckedAndViewed:
      return "tick-circle";
  }
}

function getStatusIconIntent(role: UserRole, status: Status): Intent {
  switch (status) {
    default:
    case Status.Checked:
      return "none";
    case role === "student" ? Status.StudentUpdated : Status.TeacherUpdated:
      return "danger";
    case Status.CheckedAndViewed:
      return "success";
  }
}
