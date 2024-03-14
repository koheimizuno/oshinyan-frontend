import { Helmet } from "react-helmet";

type Props = {
  title: string;
  description: string;
  keywords: string;
};

const HelmetPage = (props: Props) => {
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
      </Helmet>
    </div>
  );
};

export default HelmetPage;
