import axios from "axios";

const upload = (
  file: File,
  onUploadProgress: (progressEvent: any) => void
): Promise<any> => {
  let formData = new FormData();

  formData.append("file", file);

  return axios.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = (): Promise<any> => {
  return axios.get("/files");
};

const FileUploadService = {
  upload,
  getFiles,
};

export default FileUploadService;
