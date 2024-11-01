"use client";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import React, { useRef } from "react";

interface IFilePicker {
  onChange: (file: File) => void;
  support?: string;
}

const FilePicker: React.FC<IFilePicker> = ({ onChange, support = "" }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click(); // Trigger the hidden file input
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        accept={support}
        onChange={handleFileChange}
        style={{ display: "none" }} // Hide the default file input
        size={5000}
      />
      <Button onClick={handleButtonClick}>
        {" "}
        <Upload /> Select File
      </Button>
    </div>
  );
};

export default FilePicker;
