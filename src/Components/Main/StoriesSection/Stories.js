import React, { useState } from "react";

import * as styled from "./styledStories";

import Jane from "../../../img/nat-8.jpg";
import Tarzan from "../../../img/nat-9.jpg";
import BackgroundVideoMP4 from "../../../img/video.mp4";
import BackgroundVideoWEBM from "../../../img/video.webm";

import Post from "./Post/Post.js";

const Story = () => {
  const [Posts] = useState([
    {
      heading: "Vacation to shed to without this pesky voyeurs",
      mainPost:
        "This is the generic Post that will let you know how nice this experience is. Very nice 10/10. Would do again and Recommend to your granny while I am washing her on the Mount Everest in the inside of a Papaya.",
      userPicture: Jane,
      Username: "Jane"
    },
    {
      heading: "Vacation to shed to without this pesky voyeurs",
      mainPost:
        "This is the generic Post that will let you know how nice this experience is. Very nice 10/10. Would do again and Recommend to your granny while I am washing her on the Mount Everest in the inside of a Papaya. This text should slightly differ so I can use GitHub",
      userPicture: Tarzan,
      Username: "Tarzan"
    }
  ]);

  let PostArray = Posts.map(postInfo => {
    return (
      <Post
        heading={postInfo.heading}
        mainPost={postInfo.mainPost}
        userPicture={postInfo.userPicture}
        username={postInfo.Username}
      />
    );
  });
  return (
    <styled.StoriesContainer>
      <styled.StoryHeading>We make people Genuinly happy</styled.StoryHeading>
      <styled.StoryVideoBox>
        <styled.StoryVideo autoPlay muted loop >
          <source src={BackgroundVideoMP4} />
          <source src={BackgroundVideoWEBM}/>
          This Content is not supported on your browser
        </styled.StoryVideo>
      </styled.StoryVideoBox>
      {PostArray}
      <styled.StoryButton>More Stories</styled.StoryButton>
    </styled.StoriesContainer>
  );
};

export default Story;
