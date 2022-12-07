import { FileUploader } from "react-drag-drop-files";
import { useRecoilState } from "recoil";
import { fileContentsSelector } from "../state/atoms";

export default function SvgUploader() {
  const setDomain = useRecoilState(fileContentsSelector("domain"))[1];
  const setSubstance = useRecoilState(fileContentsSelector("substance"))[1];
  const setStyle = useRecoilState(fileContentsSelector("style"))[1];

  const handleChange = (svg: File) => {
    const reader = new FileReader();
    reader.readAsText(svg);
    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.onload = () => {
      const svgText = reader.result?.toString();
      if (!svgText) {
        return;
      }

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(svgText, "text/xml");
      const style = xmlDoc.getElementsByTagName("sty")[0].innerHTML.trim();
      setStyle({ name: "svg import", contents: style });
    };
  };

  return (
    <FileUploader
      handleChange={handleChange}
      name="file"
      types={["SVG"]}
      multiple={false}
    />
  );
}
