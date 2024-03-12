import { CircularProgress } from "@mui/material";
function SuspenseContent() {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <CircularProgress />
    </div>
  );
}

export default SuspenseContent;
