import { useEffect } from "react";

interface ImageProps {
  src: string;
  srcSet: string;
  alt: string;
  className?: string;
}

export const ResponsiveImage: React.FC<ImageProps> = ({
  src,
  srcSet,
  alt,
  className,
}) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.setAttribute("rel", "preload");
    link.setAttribute("as", "image");

    const sizes = srcSet.split(",").map((size) => size.trim().split(" ")[0]);

    sizes.forEach((size) => {
      const preloadSrc = size.split(" ")[0];
      link.setAttribute("href", preloadSrc);
      document.head.appendChild(link);
    });

    return () => {
      document.head.removeChild(link);
    };
  }, [src, srcSet]);
  return <img src={src} srcSet={srcSet} alt={alt} className={className} />;
};
