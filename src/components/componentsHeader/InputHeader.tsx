import React, { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { CInput, CIcon, Input } from "./StylrdInputIcon";

interface IInputIconProps extends InputHTMLAttributes<HTMLAnchorElement> {
  Icon: IconType;
  placeholder: string;
}

const InputIcon = ({ Icon, placeholder }: IInputIconProps) => {
  return (
    <CInput>
      <CIcon>
        <Icon />
      </CIcon>
      <Input placeholder={placeholder} />
    </CInput>
  );
};

export default InputIcon;
