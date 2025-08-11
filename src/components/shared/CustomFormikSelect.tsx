"use client";

import { useState, type ReactNode } from "react";
import { ErrorMessage, useField, useFormikContext } from "formik";

import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface CustomFormikSelectProps {
  label: string;
  placeholder?: string;
  name: string;
  className?: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  children: ReactNode;
  isDisabled?: boolean;
  addOnSelectFunc?: (institutionId: string) => void;
}
const CustomFormikSelect = ({
  label,
  name,
  placeholder,
  className,
  children,
  prefixIcon,
  suffixIcon,
  isDisabled,
  addOnSelectFunc,
}: CustomFormikSelectProps) => {
  const [field, meta] = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const { setFieldValue } = useFormikContext();

  return (
    <div className="space-y-4">
      <label
        className="font-medium flex text-[1.4rem] mb-4  text-gray-700 leading-[2.03rem]"
        htmlFor={name}
      >
        {label}
      </label>
      <div>
        <div
          className={cn(
            "border border-input rounded-md flex gap-2 items-center px-6 py-4 relative",
            meta.touched && meta.error ? "border-[#D92626]" : "",
            isFocused ? "border-primary" : "",
            className
          )}
        >
          {prefixIcon ? prefixIcon : null}
          <Select
            defaultValue={field.value}
            disabled={isDisabled}
            value={field.value}
            onValueChange={(value) => {
              setFieldValue(name, value);
              if (addOnSelectFunc) {
                addOnSelectFunc(value);
              }
            }}
          >
            <SelectTrigger
              id={name}
              name={name}
              onFocus={() => setIsFocused(true)}
              onBlur={(event) => {
                field.onBlur(event);
                setIsFocused(false);
              }}
              className="border-none w-full text-black  p-0 focus-visible:outline-none focus-visible:ring-none focus-visible:ring-offset-0 focus-visible:ring-0"
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            {children}
          </Select>

          {suffixIcon ? suffixIcon : null}
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

export default CustomFormikSelect;
