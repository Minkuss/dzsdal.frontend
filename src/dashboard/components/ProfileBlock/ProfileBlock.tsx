import React from "react";
import { Card, Navbar, NavbarHeading, NavbarGroup, NavbarDivider, Button } from "@blueprintjs/core";

interface IProfileBlock {
  userName: string;
  onChange: (value: string) => unknown;
}

export const ProfileBlock: React.FC<IProfileBlock> = ({ userName, onChange }) => {
  return (
    <Navbar>
      <NavbarGroup>
        <NavbarHeading>{userName}</NavbarHeading>
        <NavbarDivider />
        <Button onClick={() => onChange(userName)} minimal icon="log-out" small text="Выйти" />
      </NavbarGroup>
    </Navbar>
  );
};
