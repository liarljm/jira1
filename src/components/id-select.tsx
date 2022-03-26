import { Select } from "antd";
import React from "react";
import { Raw } from "types";
const { Option } = Select;
type SelectProps = React.ComponentProps<typeof Select>;
interface IdSelectProps
  extends Omit<SelectProps, "value" | "onChange" | "options"> {
  value: Raw | null | undefined;
  onChange: (value?: number) => void;
  defaultOptionName?: string;
  options?: { name: string; id: number }[];
}
export const IdSelect = (props: IdSelectProps) => {
  const { value, onChange, defaultOptionName, options, ...restProps } = props;
  return (
    <Select
      value={toNumber(value)}
      {...restProps}
      onChange={(value) => onChange(toNumber(value) || undefined)}
    >
      {defaultOptionName ? (
        <Option value="0">{defaultOptionName}</Option>
      ) : null}
      {options?.map((option) => {
        <Option value={option.id} key={option.id}>
          {option.name}
        </Option>;
      })}
    </Select>
  );
};
const toNumber = (value: unknown) => (isNaN(Number(value)) ? 0 : Number(value));
