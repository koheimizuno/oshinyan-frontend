const PageBar = ({ page }: { page: string }) => {
  return (
    <div className="flex gap-2">
      <a href="/" className="">TOP</a>
      <span>&gt;</span>
      <a href="#">{page}</a>
    </div>
  );
};

export default PageBar;
