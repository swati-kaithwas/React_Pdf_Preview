import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MdOutlineCloudUpload } from "react-icons/md";

const FileUploader = ({ onFileSelect }) => {
  const [file, setFile] = useState(null);
  const onDrop = useCallback((acceptedFile) => {
    const selectedFile = acceptedFile[0];
    setFile(selectedFile);
    onFileSelect(selectedFile);
  }, [onFileSelect]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "pdf",
  });
  return (
    <div className="file-upload" {...getRootProps()}>
      <MdOutlineCloudUpload size={32} color="grey" />
      <input {...getInputProps()} />
      <p>Drag and drop a pdf file here, or click to select one</p>
      {file && <p>Selected file:{file.name}</p>}
    </div>
  );
};

export default FileUploader;
