import React from "react";
import {
  PhotoAlbumIcon,
  UserFriendsIcon,
  EmojiSmileIcon,
  LiveIcon,
  LinkAltIcon,
  HeartIcon,
  CommentIcon,
  ShareIcon,
} from "../../../../../../../../components/Icons";

import {
  PostsContainer,
  PostsCreateContent,
  PostContent,
} from "../../../../style";

const Posts = () => {
  const { CreatePost, Post } = {
    CreatePost: () => {
      return (
        <PostsCreateContent>
          <div>
            <UserFriendsIcon size="2.2" />
            <input type="text" placeholder="What's new with you?" />
          </div>
          <hr />
          <div>
            <div>
              <LiveIcon />
              <p>Live Video</p>
            </div>
            <div>
              <PhotoAlbumIcon />
              <p>Image/Video</p>
            </div>
            <div>
              <EmojiSmileIcon />
              <p>Feeling/Activity</p>
            </div>
          </div>
        </PostsCreateContent>
      );
    },
    Post: ({ img, name }) => {
      return (
        <PostContent>
          <div>
            <UserFriendsIcon size="2.5" />
            <div>
              <h4>{name}</h4>
              <p>20 mins ago</p>
            </div>
          </div>
          <div>
            <div>
              <img src={img} alt="post" />
            </div>
            <div>
              <div>
                <HeartIcon /> 150 Likes
              </div>
              <div>
                <CommentIcon /> 80 Comments
              </div>
              <div>
                <ShareIcon /> 102 Share
              </div>
            </div>
          </div>
          <div>
            <UserFriendsIcon />
            <div>
              <input type="text" placeholder="Write your comment..." />
              <LinkAltIcon />
              <EmojiSmileIcon />
            </div>
          </div>
        </PostContent>
      );
    },
  };
  return (
    <PostsContainer>
      <CreatePost />
      <Post
        img="https://www.doe.gov.ph/sites/default/files/pdf/du_csp/tarelco_i_profile.jpg"
        name="Edward Fernandez"
      />
      <Post
        img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        name="constWardtz"
      />
      <Post
        img="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        name="Edward Smith"
      />
    </PostsContainer>
  );
};

export default Posts;
