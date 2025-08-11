import { CloudUpload, Pen, Trash2 } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface UploadImgAreaProps {
  imageURL?: string | null;
  noPreview?: boolean;
  name: string;
  setFieldValue: (field: string, value: File | null) => void;
}

const UploadImgArea = ({
  imageURL,
  noPreview,
  name,
  setFieldValue,
}: UploadImgAreaProps) => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  useEffect(() => {
    if (imageURL && !noPreview) {
      setPreview(imageURL);
    }
  }, [imageURL, noPreview]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      if (!noPreview) {
        reader.onload = function () {
          setPreview(reader.result);
        };
      }

      reader.readAsDataURL(file);

      setFieldValue(name, file);
    },
    [name, noPreview, setFieldValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="flex gap-12 items-center ">
      <div className=" border p-6 flex flex-col overflow-hidden rounded-xl items-center justify-center w-full h-[10rem] ">
        <div {...getRootProps()} className="">
          <div className="flex justify-center items-center">
            {preview ? (
              <img
                className="object-cover object-center w-full h-full"
                src={preview as string}
                alt="Product Image"
              />
            ) : (
              <div className="border rounded-xl p-3">
                <CloudUpload />
              </div>
            )}
          </div>

          <input
            {...getInputProps()}
            accept="image/png, image/jpeg, image/svg, image/jpg"
          />
          {isDragActive ? (
            <p className="font-semibold ">Drop Files Here...</p>
          ) : (
            !preview && (
              <>
                <Button
                  type="button"
                  variant={"ghost"}
                  className="text-[1.2rem] p-0 h-fit m-0 text-green-500"
                >
                  Click to upload
                </Button>
                <p className="text-[1rem] text-center font-normal text-gray-400">
                  or drag and drop
                </p>
              </>
            )
          )}
        </div>
      </div>
      {preview && (
        <div className="flex gap-4 items-center">
          <Button {...getRootProps()} variant={"ghost"}>
            <Pen size={18} />
          </Button>
          <Button
            onClick={() => {
              setPreview("");
            }}
            variant={"ghost"}
          >
            <Trash2 size={18} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default UploadImgArea;
