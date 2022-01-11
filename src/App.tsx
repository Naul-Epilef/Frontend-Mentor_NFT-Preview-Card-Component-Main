import {
  Main,
  Card,
  CardBody,
  ContainerIMG,
  EthereumSpan,
  CardBottom,
} from "./styles";

import equilibriumIMG from "./images/image-equilibrium.jpg";
import avatarIMG from "./images/image-avatar.png";

import ClockSVG from "./components/svgs/clock";
import EthereumSVG from "./components/svgs/ethereum";
import ViewSVG from "./components/svgs/view";

function App() {
  return (
    <Main>
      <Card>
        <ContainerIMG>
          <img src={equilibriumIMG} alt="EQUELIBRIUM" />
          <div className="overlay">
            <ViewSVG />
          </div>
        </ContainerIMG>
        <CardBody>
          <h2>Equilibrium #3429</h2>
          <p>Our Equilibrium collection promotes balance and calm.</p>
          <div>
            <EthereumSpan>
              <EthereumSVG />
              0.041 ETH
            </EthereumSpan>
            <span>
              <ClockSVG />3 days left
            </span>
          </div>
        </CardBody>
        <CardBottom>
          <img src={avatarIMG} alt="Avatar" />
          <span>Creation of&nbsp;</span>
          <span>Jules Wyvern</span>
        </CardBottom>
      </Card>
    </Main>
  );
}

export default App;
