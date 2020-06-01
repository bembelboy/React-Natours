import styled from "styled-components";
import * as nameProperty from "../../../GlobalStyles/Theme/nameProperties";

import { SecondaryHeading } from "../../UI/styledHeadings";
import mountainsCard from "../../../img/nat-5.jpg";
import forestCard from "../../../img/nat-6.jpg";
import seaCard from "../../../img/nat-8.jpg";
import { WhiteButton } from "../../UI/styledButtons";

export const ToursContainer = styled.section`
  background-color: rgb(${(props) => props.theme[nameProperty.lightGrey1]});
  margin-top: -20rem;
  padding: 40rem 0 15rem 0;
`;

export const ToursBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ToursHeading = styled(SecondaryHeading)`
  text-align: center;
  display: block;
  margin: 0 0 6rem 0;
`;

export const CardHeading = styled.h4`
  font-size: 2.8rem;
  font-weight: 300;
  text-transform: uppercase;
  text-align: right;
  color: rgb(${(props) => props.theme[nameProperty.white]});
  position: absolute;
  top: 12rem;
  right: 0rem;
  width: 75%;
`;

export const CardHeadingSpan = styled.span`
  &.primary {
    background-image: linear-gradient(
      to right bottom,
      rgba(${(props) => props.theme[nameProperty.yellow]}, 0.85),
      rgba(${(props) => props.theme[nameProperty.orange]}, 0.85)
    );
  }

  &.secondary {
    background-image: linear-gradient(
      to right bottom,
      rgba(${(props) => props.theme[nameProperty.lightBlue]}, 0.85),
      rgba(${(props) => props.theme[nameProperty.purple]}, 0.85)
    );
  }

  &.tertiary {
    background-image: linear-gradient(
      to right bottom,
      rgba(${(props) => props.theme[nameProperty.lightGreen]}, 0.85),
      rgba(${(props) => props.theme[nameProperty.darkGreen]}, 0.85)
    );
  }
`;

export const CardPicture = styled.div`
  background-size: cover;
  background-blend-mode: multiply;
  min-height: 20rem;
  width: 100%;
  height: auto;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);

  &.mountains {
    background-image: url(${mountainsCard}),
      linear-gradient(
        to bottom,
        rgb(${(props) => props.theme[nameProperty.yellow]}),
        rgb(${(props) => props.theme[nameProperty.orange]})
      );
  }

  &.forest {
    background-image: url(${forestCard}),
      linear-gradient(
        to bottom,
        rgb(${(props) => props.theme[nameProperty.lightGreen]}),
        rgb(${(props) => props.theme[nameProperty.darkGreen]})
      );
  }

  &.sea {
    background-image: url(${seaCard}),
      linear-gradient(
        to bottom,
        rgb(${(props) => props.theme[nameProperty.lightBlue]}),
        rgb(${(props) => props.theme[nameProperty.purple]})
      );
  }
`;

export const CardPriceBox = styled.div`
  display: block;
  margin: 4rem 0;
`;

export const CardPrice = styled.p`
  padding: 3rem;
  text-align: center;
  width: 100%;

  &.priceOnly {
    font-size: 1.4rem;
    color: white;
    font-weight: 500;
  }
  &.priceValue {
    font-size: 6rem;
    font-weight: 100;
  }
`;

export const CardButton = styled(WhiteButton)`
  width: 50%;
  margin: 0 auto;
  text-align: center;
`;

export const GreenButton = styled(WhiteButton)`
  width: 40%;
  max-width: 45rem;
  margin: 10rem auto 3rem;
  text-align: center;
  background-color: rgb(${(props) => props.theme[nameProperty.mediumGreen]});
  display: block;
  color: rgb(${(props) => props.theme[nameProperty.white]});

  &:after{
      background-color: rgb(${props => props.theme[nameProperty.mediumGreen]});
  }
`;
