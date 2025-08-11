"use client";

import { useState, type ReactNode } from "react";
import { ErrorMessage, useField } from "formik";

import { Input, type InputProps } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomFormikInputProps extends InputProps {
  label: string;
  placeholder?: string;
  name: string;
  type?: string;
  className?: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
}
const CustomFormikInput = ({
  label,
  name,
  type,
  placeholder,
  className,
  prefixIcon,
  suffixIcon,

  ...rest
}: CustomFormikInputProps) => {
  const [field, meta] = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [controlledType, setControlledType] = useState(type);

  return (
    <div className="">
      {label ? (
        <label
          className={cn(
            `font-medium text-[1.4rem] flex mb-4  leading-[2.03rem] text-gray-700`
          )}
          htmlFor={label}
        >
          {label}
        </label>
      ) : null}
      <div>
        <div
          className={cn(
            "border border-input rounded-md flex gap-2  items-center pl-6 pr-12 relative",
            meta.touched && meta.error ? "border-[#D92626]" : "",
            isFocused ? "border-primary" : isFocused ? "border-white" : "",
            className
          )}
        >
          {prefixIcon ? prefixIcon : null}

          <Input
            {...field}
            id={name}
            name={name}
            type={controlledType}
            placeholder={placeholder}
            className={cn(
              "border-none placeholder:text-gray-500 rounded-none  bg-transparent py-4 focus-visible:outline-none focus-visible:ring-none focus-visible:ring-offset-0 focus-visible:ring-0"
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={(event) => {
              field.onBlur(event);
              setIsFocused(false);
            }}
            {...rest}
          />
          {type == "password" ? (
            <button
              type="button"
              onClick={() =>
                controlledType == "password"
                  ? setControlledType("text")
                  : setControlledType("password")
              }
              className="absolute right-6"
            >
              {controlledType == "password" ? <Eye /> : <EyeOff />}
            </button>
          ) : null}
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

export default CustomFormikInput;
