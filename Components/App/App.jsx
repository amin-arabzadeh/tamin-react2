import Banner1 from "../Banner1/Banner1";
import Banner2 from "../Banner2/Banner2";
import Banner3 from "../Banner3/Banner3";
import Banner4 from "../Banner4/Banner4";
import Banner5 from "../Banner5/Banner5";
import Card1 from "../Card1/Card";
import Card2 from "../Card2/Card2";
import Content2 from "../Content2/Content2";
import Content3 from "../Content3/Content3";
import Content4 from "../Content4/Content4";
import Content5 from "../Content5/Content5";
import Content6 from "../Content6/Content6";
import Content from "../Contents/Content";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Media from "../Media/Media";
import NAVBAR2 from "../NAVBAR2/NAVBAR2.JSX";

import Post from "../Post/Post";

const App = () => {
  return (
    <div>
      <NAVBAR2 />
      <Header />
      <Content />
      <Post />
      <Banner1 />
      <Content2 />
      <Banner2 />
      <Content3 />
      <Banner3 />
      <Content4 />
      <Banner4 />
      <Content5 />
      <Card1 />
      <Card2 />
      <Banner5/>
      <Content6/>
      <Media/>
      <Footer/>
    </div>
  );
};

export default App;
