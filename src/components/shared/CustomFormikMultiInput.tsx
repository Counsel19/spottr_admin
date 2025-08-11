"use client";

import React, { useState } from "react";
import { ErrorMessage, useField, useFormikContext } from "formik";
import { Input, type InputProps } from "../ui/input";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface CustomFormikMultiInputProps extends InputProps {
  label: string;
  placeholder?: string;
  name: string;
  className?: string;
}
const CustomFormikMultiInput = ({
  label,
  name,
  type,
  placeholder,
  className,
  ...rest
}: CustomFormikMultiInputProps) => {
  const [field, meta] = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const { setFieldValue } = useFormikContext();

  const [input, setInput] = useState("");

  const addTag = () => {
    const trimmed = input.trim();
    if (trimmed && !field.value.includes(trimmed)) {
      setFieldValue(name, [...field.value, trimmed]);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  const removeTag = (tag: string) => {
    setFieldValue(
      name,
      field.value.filter((t: string) => t !== tag)
    );
  };

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
          <Input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            className={cn(
              "border-none placeholder:text-gray-500 rounded-none  bg-transparent py-4 focus-visible:outline-none focus-visible:ring-none focus-visible:ring-offset-0 focus-visible:ring-0"
            )}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onChange={(e) => setInput(e.target.value)}
            value={input}
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
        <div className="flex flex-wrap gap-2 mt-2 border border-dashed rounded-md p-2">
          {field.value.map((tag: string) => (
            <div
              key={tag}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-200 text-[1.2rem]"
            >
              {tag}
              <button onClick={() => removeTag(tag)} type="button">
                <X className="w-4 h-4 text-muted-foreground hover:text-destructive transition" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomFormikMultiInput;
