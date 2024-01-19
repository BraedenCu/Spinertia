import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="render-removebg.png"
        id="intro"
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        icon="graph-edited.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="rocket-edited.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="svg-edited.svg"
        id="product"
      />
    </Container>
  );
};

export default Home;
