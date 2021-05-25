import React from "react";
import { Badge } from "../../../../../../components";
import { PlusIcon, UserFriendsIcon } from "../../../../../../components/Icons";

import {
  ContentContainer,
  ContentMyDayFeedContainer,
  FeedContainer,
} from "../../style";

import { Posts, SideInfo } from "./elements";
const { MyDayFeed, Feed } = {
  MyDayFeed: () => {
    const users = [
      {
        name: "Edward Fernandez",
        image:
          "http://images.unsplash.com/photo-1603398918387-58546bb074be?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      },
      {
        name: "Mark Zuckerberg",
        image:
          "https://1.bp.blogspot.com/-hRv_Ixfo4aE/XJqrXuVvI2I/AAAAAAAABB0/CRY9kt6H7OE62QA78jsxlFGC1Qsw6wABwCKgBGAs/w1080-h1920-c/sunrise-landscape-art-scenery-nature-uhdpaper.com-8K-176.jpg",
      },
    ];
    return (
      <ContentMyDayFeedContainer images={users.map(({ image }) => image)}>
        <div className="my-day__create">
          <Badge
            text={<PlusIcon />}
            bgColor="var(--primary-3)"
            color="var(--primary-1)"
            size="3"
          />{" "}
          <p>
            Create <br />
            New Story
          </p>
        </div>{" "}
        <div className="my-day__list">
          <div>
            <UserFriendsIcon />
            <p>Edward</p>
          </div>
        </div>
        <div className="my-day__list">
          <div>
            <UserFriendsIcon />
            <p>Edward</p>
          </div>
        </div>
        <div className="my-day__list">
          <div>
            <UserFriendsIcon />
            <p>Edward</p>
          </div>
        </div>
        <div className="my-day__list">
          <div>
            <UserFriendsIcon />
            <p>Edward</p>
          </div>
        </div>
        <div className="my-day__list">
          <div>
            <UserFriendsIcon />
            <p>Edward</p>
          </div>
        </div>
        <div className="my-day__list">
          <div>
            <UserFriendsIcon />
            <p>Edward</p>
          </div>
        </div>
      </ContentMyDayFeedContainer>
    );
  },

  Feed: () => {
    return (
      <FeedContainer>
        <Posts> </Posts>
        <SideInfo>sa</SideInfo>
      </FeedContainer>
    );
  },
};

const Content = () => {
  return (
    <ContentContainer>
      <MyDayFeed />
      <Feed />
    </ContentContainer>
  );
};

export default Content;
