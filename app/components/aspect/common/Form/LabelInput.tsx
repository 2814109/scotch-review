import { FC } from "react";
import LabelItem, { LabelItemProps } from "./LabelItem";
import InputItem, { InputItemProps } from "./InputItem";

type LabelInputProps = Omit<LabelItemProps, "htmlFor"> & InputItemProps;
const LabelInput: FC<LabelInputProps> = ({
  onChange,
  type,
  value,
  name,
  placeholder,
  required,
  labelName,
}) => {
  return (
    <>
      <InputItem
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        required={required}
      />
      <LabelItem htmlFor={name} labelName={labelName} />
    </>
  );
};
export default LabelInput;
