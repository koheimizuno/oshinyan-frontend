import { PropsWithChildren } from "react";

const Container = (props: PropsWithChildren) => (
  <div className="w-[960px] m-auto">{props.children}</div>
);

export default Container;
