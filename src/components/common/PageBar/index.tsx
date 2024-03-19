import { Link } from "react-router-dom";

const PageBar = ({ page }: { page: string }) => {
  return (
    <div className="flex gap-2 py-4">
      <Link to="/" className="">
        TOP
      </Link>
      <span>&gt;&nbsp;</span>
      <Link to="#">
        {window.location.href.includes("oshinyan/") ? (
          <h1>{page}</h1>
        ) : (
          <span>{page}</span>
        )}
      </Link>
    </div>
  );
};

export default PageBar;
