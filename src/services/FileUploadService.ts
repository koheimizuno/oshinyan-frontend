import axios from "axios";

const upload = (file: File): Promise<any> => {
  let formData = new FormData();

  formData.append("imgs", file);

  return axios.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
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
