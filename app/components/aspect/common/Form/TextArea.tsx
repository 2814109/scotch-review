import { ChangeEvent, FC } from "react";

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};
const TextArea: FC<Props> = ({ label, name, value, onChange }) => {
  return (
    <>
      <label
        htmlFor="message"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {label}
      </label>
      <textarea
        id="message"
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Leave a comment..."
      ></textarea>
    </>
  );
};

export default TextArea;
