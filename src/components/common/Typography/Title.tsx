function Title({ title }: { title: string }) {
  return (
    <>
      <h1 className="text-[28px] md:text-[32px] tracking-[-.1em] py-2 border-b border-[#CBB279]">
        {title}
      </h1>
    </>
  );
}

export default Title;
