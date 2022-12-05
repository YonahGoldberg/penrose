import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function SvgUploader() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsText(file);

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        setThing(binaryStr!.toString());
      };
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [thing, setThing] = useState<string>("blah");

  return (
    <section
      className="container"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <div {...getRootProps({ className: "dropZone" })}>
        <input {...getInputProps()} />
        <p>Drag SVG here to upload... {thing} </p>
      </div>
    </section>
  );
}
