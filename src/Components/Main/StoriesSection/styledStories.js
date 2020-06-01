import styled from "styled-components";
import * as nameProperty from "../../../GlobalStyles/Theme/nameProperties";
import { ArrowButton } from "../../UI/styledButtons";

import { SecondaryHeading, TertiaryHeading } from "../../UI/styledHeadings";

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

export const StoryBoxFigure = styled.figure`
  background-color: #774563;
  width: 15rem;
  height: 15rem;
  float: left;
  margin-right: 3rem;
  shape-outside: circle(50% at 50% 50%);
  -webkit-shape-outside-circle: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  -webkit-clip-path: circle(50% at 50% 50%);
  transform: translateX(-3rem) skewX(12deg);
  position: relative;
  backface-visibilty: hidden;
`;
export const StoryBoxImage = styled.img`
  width: auto;
  height: 100%;
  backface-visibilty: hidden;
`;

export const TextboxHeading = styled(TertiaryHeading)`
  display: block;
  margin-bottom: 1.5rem;
`;

export const StoryParagraph = styled.p`
  display: block;
`;

export const StoryBox = styled.div`
  width: 75%;
  margin: 4rem auto;
  box-shadow: 0 3rem 6rem rgba(${props => props.theme[nameProperty.black]}, 0.1);
  background-color: rgba(${props => props.theme[nameProperty.white]}, .6);
  border-radius: 3px;
  padding: 6rem;
  line-height: 2.5rem;
  overflow: auto;
  font-size: ${props => props.theme[nameProperty.defaultFontSize]};
  transform: skewX(-12deg);
  backface-visibilty: hidden;

  & > * {
    transform: skewX(12deg);
  }

  &:hover ${StoryboxFigCaption} {
    opacity: 1;
    transform: translate(-50%, 50%);
  }

  &:hover ${StoryBoxImage} {
    transform: scale(1.1);
    transition: all 0.3s;
    backface-visibilty: hidden;
  }
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
