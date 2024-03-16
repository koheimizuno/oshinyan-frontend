import { generate } from "critical";

generate(
  {
    inline: true,
    base: "build/",
    src: "./index.html",
    target: {
      html: "index.html",
    },
    dimensions: [
      {
        height: 500,
        width: 300,
      },
      {
        height: 720,
        width: 1280,
      },
    ],
  },
  (err, output) => {
    if (err) {
      console.error(err);
    } else if (output) {
      console.log("Generated successfully!");
    }
  }
);
