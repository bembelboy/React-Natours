import React from 'react';

import * as styled from './styledPost.js';

const Post = (props) => {

  return(
    <styled.StoryBox>
      <styled.StoryBoxFigure>
        <styled.StoryBoxImage src={props.userPicture} />
        <styled.StoryboxFigCaption>{props.username}</styled.StoryboxFigCaption>
      </styled.StoryBoxFigure>
      <styled.TextboxHeading>{props.heading}</styled.TextboxHeading>
      <styled.StoryParagraph>
        {props.mainPost}
      </styled.StoryParagraph>
    </styled.StoryBox>
  )
};

export default Post;
