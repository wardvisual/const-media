import React from "react";
import { Badge, SearchBox } from "../../../../../../components";
import { PeopleTeamIcon } from "../../../../../../components/Icons";
import { SubGrid } from "../../../../../../components/shared/styles";
import { ContentContainer, SubContent } from "../../style";

const { Friends, Pages, Groups } = {
  Pages: () => {
    return (
      <SubGrid>
        <div>
          <p>YOUR PAGES</p>
        </div>
        <div>
          <div>
            <div>
              <PeopleTeamIcon size="2" /> <p>constWardtz</p>
            </div>
          </div>
          <div>
            <div>
              <PeopleTeamIcon size="2" /> <p>MusiConst</p>
            </div>
          </div>
          <div>
            <div>
              <PeopleTeamIcon size="2" /> <p>The Developer</p>
            </div>
          </div>
        </div>
      </SubGrid>
    );
  },
  Friends: () => {
    return (
      <SubGrid>
        <div>
          <p>FRIENDS</p>
        </div>
        <div>
          <div>
            <div>
              <PeopleTeamIcon size="2" /> <p>Edward Fernandez</p>
            </div>
            <Badge text="7" />
          </div>
          <div>
            <div>
              <PeopleTeamIcon size="2" /> <p>Mark Zuckerberg</p>
            </div>
          </div>
          <div>
            <div>
              <PeopleTeamIcon size="2" /> <p>Bill Gates</p>
            </div>
            <Badge text="5" />
          </div>
          <div>
            <div>
              <PeopleTeamIcon size="2" /> <p>Elon Musk</p>
            </div>
          </div>
        </div>
      </SubGrid>
    );
  },
  Groups: () => {
    return (
      <SubGrid>
        <div>
          <p>GROUPS</p>
        </div>
        <div>
          <div>
            <div>
              <PeopleTeamIcon size="2" /> <p>Hackers Com.</p>
            </div>
          </div>
          <div>
            <div>
              <PeopleTeamIcon size="2" /> <p>Hackaton Com.</p>
            </div>
            <Badge text="7" />
          </div>
        </div>
      </SubGrid>
    );
  },
};

const Content = () => {
  return (
    <ContentContainer>
      <SearchBox />
      <Pages />
      <Friends />
      <Groups />
    </ContentContainer>
  );
};

export default Content;
