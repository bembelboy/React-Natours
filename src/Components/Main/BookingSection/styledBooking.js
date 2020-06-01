import styled from "styled-components";
import * as nameProperty from "../../../GlobalStyles/Theme/nameProperties.js";
import BackgroundBooking from "../../../img/nat-10.jpg";

export const BookingContainer = styled.section`
  padding: 15rem 3rem;
  background-image: linear-gradient(
    to right bottom,
    rgb(${props => props.theme[nameProperty.lightGreen]}),
    rgb(${props => props.theme[nameProperty.darkGreen]})
  );
`;

export const BookingBox = styled.div`
  position: relative;
  background-image: url(${BackgroundBooking});
  background-size: cover;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem
    rgba(${props => props.theme[nameProperty.black]}, 0.15);

  height: 50rem;
`;

export const BookingContentBox = styled.div`
  height: 50rem;
  position: absolute;
  top: 0;
  left: 0;
  background-image: rgba(${props => props.theme[nameProperty.white]}, 0.9);
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
`;
