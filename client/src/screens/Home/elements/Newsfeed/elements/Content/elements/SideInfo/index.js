import React from "react";
import {
  UserFriendsIcon,
  CloseIcon,
  CheckIcon,
  MoreHorizontalIcon,
  EventIcon,
  BirthdayCakeIcon,
} from "../../../../../../../../components/Icons";
import { Anchor } from "../../../../../../../../globalStyle";

import {
  SideInfoContainer,
  SideInfoFriendRequest,
  SideInfoEvents,
} from "../../../../style";

const SideInfo = () => {
  const { FriendRequest, Events } = {
    FriendRequest: () => {
      return (
        <SideInfoFriendRequest>
          <div>
            <h4>Friend Requests</h4>
            <Anchor to="#!">
              <p>See All</p>
            </Anchor>{" "}
          </div>
          <hr />
          <div>
            <div>
              <UserFriendsIcon size="2" />
              <div>
                <h4>Edward Smith</h4>
                <p>14 Mutual friends</p>
              </div>
            </div>
            <div>
              <button>
                <CheckIcon /> <p>Accept</p>
              </button>{" "}
              <button className="button-light">
                <CloseIcon />
                <p>Ignore</p>
              </button>
            </div>
          </div>
        </SideInfoFriendRequest>
      );
    },
    Events: () => {
      return (
        <SideInfoEvents>
          <div>
            <h4>Events</h4>
            <MoreHorizontalIcon />
          </div>
          <div>
            <div>
              <EventIcon color="var(--primary-1)" />
              <div>14 Events Invites</div>
            </div>
            <div>
              <BirthdayCakeIcon color="var(--success-1)" />
              <div>Elon Musk have birthdays today</div>
            </div>
          </div>
        </SideInfoEvents>
      );
    },
  };
  return (
    <SideInfoContainer>
      <FriendRequest />
      <Events />
    </SideInfoContainer>
  );
};

export default SideInfo;
