import { AiOutlineCloudDownload } from "react-icons/ai";

export const DownloadCVButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1jDvqH3XpqPsO7iSrX59ydZB5h9bf_N2D/view?usp=sharing";
    link.download = "Curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="py-2 px-4 rounded-full text-white font-bold bg-background/40 lg:bg-violet-900 shadow-lg flex justify-center items-center gap-1"
    >
      <AiOutlineCloudDownload />
      Currículo
    </button>
  );
};
