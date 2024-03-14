import { useRef, PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "../../components/basic/Container";
import { ReactNotifications } from "react-notifications-component";

const MainLayout = (props: PropsWithChildren) => {
  const topRef = useRef<HTMLDivElement>(null);
  const handleScrollTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <ReactNotifications />
      <div className="bg-white">
        <Container>
          <Header ref={topRef} />
        </Container>
      </div>
      {props.children}
      <Container>
        <Footer handleScrollTop={handleScrollTop} />
      </Container>
    </div>
  );
};

export default MainLayout;
