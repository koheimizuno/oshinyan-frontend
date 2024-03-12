import React from "react";

declare module "react" {
  interface ImgHTMLAttributes<T> extends React.AnchorHTMLAttributes<T> {
    fetchpriority?: "auto" | "low" | "high";
  }
}
