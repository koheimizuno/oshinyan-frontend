import { PropsWithChildren } from "react";

const Container = (props: PropsWithChildren) => (
  <div className="w-full max-w-[960px] m-auto px-5 lg:px-0">
    {props.children}
  </div>
);

export default Container;
