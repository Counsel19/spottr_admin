import { useState } from "react";
import { ErrorMessage, useField } from "formik";

import { Textarea, type TextareaProps } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface CustomFormikTextareaProps extends TextareaProps {
  label: string;
  placeholder?: string;
  name: string;
  className?: string;
  blueBgVariant?: boolean;
}
const CustomFormikTextarea = ({
  label,
  name,
  placeholder,
  className,
  blueBgVariant,
  ...rest
}: CustomFormikTextareaProps) => {
  const [field, meta] = useField(name);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="space-y-4">
      <label
        className={cn(
          `font-medium text-[1.4rem] flex mb-4  leading-[2.03rem]`,
          blueBgVariant ? "text-white" : " text-gray-700 "
        )}
        htmlFor={label}
      >
        {label}
      </label>
      <div>
        <div
          className={cn(
            "border border-input rounded-md flex gap-2 items-center pl-6 pr-12 py-4 relative",
            meta.touched && meta.error ? "border-[#D92626]" : "",
            isFocused && !blueBgVariant
              ? "border-primary"
              : isFocused && !blueBgVariant
              ? "border-white"
              : "",
            className
          )}
        >
          <Textarea
            {...field}
            id={name}
            name={name}
            placeholder={placeholder}
            className={cn(
              "border-none text-black min-h-[150px] placeholder:text-gray-500 p-0 focus-visible:outline-none focus-visible:ring-none focus-visible:ring-offset-0 focus-visible:ring-0"
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={(event) => {
              field.onBlur(event);
              setIsFocused(false);
            }}
            {...rest}
          />
        </div>
        <ErrorMessage
          name={name}
          component="div"
          className=" text-md text-[#D92626]"
        />
      </div>
    </div>
  );
};

export default CustomFormikTextarea;
