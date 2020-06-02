import styled from "styled-components";
import * as nameProperty from "../../../GlobalStyles/Theme/nameProperties.js";
import BackgroundBooking from "../../../img/nat-10.jpg";
import { SecondaryHeading } from '../../UI/styledHeadings.js';

export const BookingContainer = styled.section `
  padding: 30rem 6rem;
  background-image: linear-gradient(
    to right bottom,
    rgb(${props => props.theme[nameProperty.lightGreen]}),
    rgb(${props => props.theme[nameProperty.darkGreen]})
  );
`;

export const BookingBox = styled.div `
  position: relative;
  background-image: linear-gradient(
      105deg,
      rgba(${props => props.theme[nameProperty.white]}, 0.9) 50%,
      transparent 50%
    ),
    url(${BackgroundBooking});
  background-size: cover;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem
    rgba(${props => props.theme[nameProperty.black]}, 0.15);
`;

export const BookingHeading = styled(SecondaryHeading)`
`;

export const BookingHeadingBox = styled.div`
  width: 50%;
  display: block;
  padding: 3rem;
`;
