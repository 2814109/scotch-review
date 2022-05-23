import { ChangeEvent, FC } from "react";

export type InputItemProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string | number;
  name: string;
  placeholder: string;
  required: boolean;
};

const InputItem: FC<InputItemProps> = ({
  onChange,
  type,
  value,
  name,
  placeholder = "",
  required = false,
}) => {
  return (
    <input
      id={name}
      onChange={onChange}
      type={type}
      value={value}
      name={name}
      className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
      placeholder={placeholder}
      required={required}
    />
  );
};

export default InputItem;
