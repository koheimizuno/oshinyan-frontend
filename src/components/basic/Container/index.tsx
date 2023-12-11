import { PropsWithChildren } from "react";

export default (props: PropsWithChildren) => (
  <div className="w-[960px] m-auto ">{props.children}</div>
);
