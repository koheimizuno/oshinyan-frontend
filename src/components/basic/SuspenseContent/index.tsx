import { CircularProgress } from "@mui/material";
function SuspenseContent() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <CircularProgress />
    </div>
  );
}

export default SuspenseContent;
