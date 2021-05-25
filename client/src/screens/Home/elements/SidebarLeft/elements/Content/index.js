import React, { useState } from "react";
import { Badge } from "../../../../../../components";
import {
  ArrowDropDownIcon,
  BroadActivityFeedIcon,
  BuildingShopIcon,
  Calendar2EventIcon,
  FileEarmarkPostFillIcon,
  PersonIcon,
  UserFriendsIcon,
  VideosIcon,
  PeopleTeamIcon,
  ArrowDropUpIcon,
} from "../../../../../../components/Icons";
import { onClickHandler } from "../../../../../../utils/helpers";
import {
  ContentContainer,
  ContentShortcuts,
  ContentMenu,
  ContentUserThumb,
} from "../../style";

const { UserThumb, Menu, Shortcuts } = {
  UserThumb: () => {
    return (
      <ContentUserThumb>
        <PersonIcon size="2" />
        <div>
          <h4>Edward Fernandez</h4>
          <p>@wardvisual</p>
        </div>
      </ContentUserThumb>
    );
  },
  Menu: () => {
    return (
      <ContentMenu>
        <div className="active">
          <BroadActivityFeedIcon /> <p>Feed</p>
        </div>
        <div>
          <UserFriendsIcon /> <p>Friends</p>
        </div>
        <div>
          <Calendar2EventIcon /> <p>Events</p>
        </div>
        <div>
          <VideosIcon /> <p>Watch Videos</p>
        </div>
        <div>
          <FileEarmarkPostFillIcon /> <p>Files</p>
        </div>
        <div>
          <BuildingShopIcon /> <p>Marketplace</p>
        </div>
      </ContentMenu>
    );
  },
  Shortcuts: () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const click = onClickHandler();

    return (
      <ContentShortcuts toggleDropdown={toggleDropdown}>
        <div onClick={() => click(setToggleDropdown, !toggleDropdown)}>
          <p>SHORTCUTS</p>
          {toggleDropdown ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </div>
        <div>
          <div>
            <div>
              <PeopleTeamIcon size="2" /> <p>Visual Team</p>
            </div>{" "}
            <Badge text="3" />
          </div>
          <div>
            <div>
              <PeopleTeamIcon size="2" /> <p>Const Community</p>
            </div>
            <Badge text="3" />
          </div>
        </div>
      </ContentShortcuts>
    );
  },
};

const Content = () => {
  return (
    <ContentContainer>
      <UserThumb />
      <Menu />
      <Shortcuts />
    </ContentContainer>
  );
};

export default Content;
