import { useEffect } from "react";

interface ImageProps {
  src: string;
  srcSet?: string;
  alt: string;
  className?: string;
}

const ResponsiveImage = ({ src, srcSet, alt, className }: ImageProps) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.setAttribute("rel", "preload");
    link.setAttribute("as", "image");

    const sizes = srcSet?.split(",").map((size) => size.trim().split(" ")[0]);

    sizes?.forEach((size) => {
      const preloadSrc = size.split(" ")[0];
      link.setAttribute("href", preloadSrc);
      document.head.appendChild(link);
    });

    return () => {
      document.head.removeChild(link);
    };
  }, [src, srcSet]);
  return (
    <img
      loading="lazy"
      src={src}
      srcSet={srcSet}
      alt={alt}
      className={className}
    />
  );
};

export default ResponsiveImage;
