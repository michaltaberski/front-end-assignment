import { SelectInput } from "./styles";

// I think it's nice example to show generics here
type SelectProps<T> = {
  label?: string;
  options: {
    value: T;
    label: string;
  }[];
  onChange: (value: string) => void;
};

const Select = <T extends string | number>({
  options,
  onChange,
  label,
}: SelectProps<T>) => {
  return (
    <label>
      {label}
      <SelectInput
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectInput>
    </label>
  );
};

export default Select;
