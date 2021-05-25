import { Search } from "@styled-icons/bootstrap/Search";
import { Notifications } from "@styled-icons/ionicons-sharp/Notifications";
import { UserFriends } from "@styled-icons/fa-solid/UserFriends";
import { Toggles } from "@styled-icons/bootstrap/Toggles";
import { Person } from "@styled-icons/fluentui-system-filled/Person";
import { Messenger } from "@styled-icons/boxicons-logos/Messenger";
import { BroadActivityFeed } from "@styled-icons/fluentui-system-filled/BroadActivityFeed";
import { Calendar2Event } from "@styled-icons/bootstrap/Calendar2Event";
import { PhotoAlbum } from "@styled-icons/boxicons-regular/PhotoAlbum";
import { Videos } from "@styled-icons/boxicons-solid/Videos";
import { FileEarmarkPostFill } from "@styled-icons/bootstrap/FileEarmarkPostFill";
import { BuildingShop } from "@styled-icons/fluentui-system-filled/BuildingShop";
import { ArrowDropDown } from "@styled-icons/remix-line/ArrowDropDown";
import { Plus } from "@styled-icons/boxicons-regular/Plus";
import { ArrowDropUp } from "@styled-icons/remix-line/ArrowDropUp";
import { LinkAlt } from "@styled-icons/boxicons-regular/LinkAlt";
import { PeopleTeam } from "@styled-icons/fluentui-system-filled/PeopleTeam";
import { EmojiSmile } from "@styled-icons/bootstrap/EmojiSmile";
import { Check } from "@styled-icons/boxicons-regular/Check";
import { Close } from "@styled-icons/evaicons-solid/Close";
import { Heart } from "@styled-icons/boxicons-solid/Heart";
import { Comment } from "@styled-icons/boxicons-solid/Comment";
import { Event } from "@styled-icons/material/Event";
import { Share } from "@styled-icons/boxicons-solid/Share";
import { MoreHorizontal } from "@styled-icons/evaicons-solid/MoreHorizontal";
import { BirthdayCake } from "@styled-icons/fa-solid/BirthdayCake";

import { Live } from "@styled-icons/fluentui-system-filled/Live";
import { iconStyle } from "../../globalStyle";

export const {
  SearchIcon,
  NotificationsIcon,
  UserFriendsIcon,
  TogglesIcon,
  PhotoAlbumIcon,
  PlusIcon,
  PeopleTeamIcon,
  ArrowDropDownIcon,
  ArrowDropUpIcon,
  BuildingShopIcon,
  FileEarmarkPostFillIcon,
  PersonIcon,
  VideosIcon,
  Calendar2EventIcon,
  BroadActivityFeedIcon,
  MessengerIcon,
  EmojiSmileIcon,
  LiveIcon,
  CheckIcon,
  CloseIcon,
  LinkAltIcon,
  HeartIcon,
  CommentIcon,
  ShareIcon,
  MoreHorizontalIcon,
  EventIcon,
  BirthdayCakeIcon,
} = {
  SearchIcon: ({ size, color }) => (
    <Search style={iconStyle(size || 1.4, color)} />
  ),
  NotificationsIcon: ({ size, color }) => (
    <Notifications style={iconStyle(size || 1.4, color)} />
  ),
  UserFriendsIcon: ({ size, color }) => (
    <UserFriends style={iconStyle(size || 1.4, color)} />
  ),
  TogglesIcon: ({ size, color }) => (
    <Toggles style={iconStyle(size || 1.4, color)} />
  ),
  PhotoAlbumIcon: ({ size, color }) => (
    <PhotoAlbum style={iconStyle(size || 1.4, color)} />
  ),
  EventIcon: ({ size, color }) => (
    <Event style={iconStyle(size || 1.4, color)} />
  ),
  PlusIcon: ({ size, color }) => <Plus style={iconStyle(size || 1.4, color)} />,
  MoreHorizontalIcon: ({ size, color }) => (
    <MoreHorizontal style={iconStyle(size || 1.4, color)} />
  ),
  CommentIcon: ({ size, color }) => (
    <Comment style={iconStyle(size || 1.4, color)} />
  ),
  BirthdayCakeIcon: ({ size, color }) => (
    <BirthdayCake style={iconStyle(size || 1.4, color)} />
  ),
  HeartIcon: ({ size, color }) => (
    <Heart style={iconStyle(size || 1.4, color)} />
  ),
  PeopleTeamIcon: ({ size, color }) => (
    <PeopleTeam style={iconStyle(size || 1.4, color)} />
  ),
  ShareIcon: ({ size, color }) => (
    <Share style={iconStyle(size || 1.4, color)} />
  ),
  LiveIcon: ({ size, color }) => <Live style={iconStyle(size || 1.4, color)} />,
  EmojiSmileIcon: ({ size, color }) => (
    <EmojiSmile style={iconStyle(size || 1.4, color)} />
  ),
  LinkAltIcon: ({ size, color }) => (
    <LinkAlt style={iconStyle(size || 1.4, color)} />
  ),
  ArrowDropDownIcon: ({ size, color }) => (
    <ArrowDropDown style={iconStyle(size || 1.4, color)} />
  ),
  CheckIcon: ({ size, color }) => (
    <Check style={iconStyle(size || 1.4, color)} />
  ),
  CloseIcon: ({ size, color }) => (
    <Close style={iconStyle(size || 1.4, color)} />
  ),
  ArrowDropUpIcon: ({ size, color }) => (
    <ArrowDropUp style={iconStyle(size || 1.4, color)} />
  ),
  BuildingShopIcon: ({ size, color }) => (
    <BuildingShop style={iconStyle(size || 1.4, color)} />
  ),
  FileEarmarkPostFillIcon: ({ size, color }) => (
    <FileEarmarkPostFill style={iconStyle(size || 1.4, color)} />
  ),
  PersonIcon: ({ size, color }) => (
    <Person style={iconStyle(size || 1.4, color)} />
  ),
  VideosIcon: ({ size, color }) => (
    <Videos style={iconStyle(size || 1.4, color)} />
  ),
  Calendar2EventIcon: ({ size, color }) => (
    <Calendar2Event style={iconStyle(size || 1.4, color)} />
  ),
  BroadActivityFeedIcon: ({ size, color }) => (
    <BroadActivityFeed style={iconStyle(size || 1.4, color)} />
  ),
  MessengerIcon: ({ size, color }) => (
    <Messenger style={iconStyle(size || 1.4, color)} />
  ),
};
