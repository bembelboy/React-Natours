import styled from "styled-components";
import * as nameProperty from "../../../GlobalStyles/Theme/nameProperties";
import { ArrowButton } from "../../UI/styledButtons";

import { SecondaryHeading } from "../../UI/styledHeadings";

export const StoriesContainer = styled.section`
  position: relative;
  padding: 15rem 0;
`;

export const StoryHeading = styled(SecondaryHeading)`
  text-align: center;
  margin: 0 auto 5rem;
  display: block;
`;

export const StoryboxFigCaption = styled.figcaption`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 20%);
  color: rgb(${props => props.theme[nameProperty.white]});
  text-transform: uppercase;
  font-size: 1.7rem;
  text-align: center;
  opacity: 0;
  transition: all 0.3s;
  backface-visibilty: hidden;
`;

export const StoryButton = styled(ArrowButton)`
  display: block;
  text-align: center;
  width: 15%;
  min-width: 15rem;
  margin: 3rem auto;
`;

export const StoryVideoBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.15;
`;

export const StoryVideo = styled.video`
height: 100%;
width: 100%;
object-fit: cover;
`;
