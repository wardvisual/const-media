import styled from "styled-components";
import { layout } from "../../../../globalStyle";

export const {
  NewsfeedContainer,
  NavContainer,
  ContentContainer,
  ContentMyDayFeedContainer,
  FeedContainer,
  PostsContainer,
  PostContent,
  PostsCreateContent,
  SideInfoContainer,
  SideInfoFriendRequest,
  SideInfoEvents,
} = {
  NewsfeedContainer: styled.div`
    padding: 0 1rem 0 1rem;
    height: 100vh;
  `,
  NavContainer: styled.div`
    padding: 1.5rem 0.5rem 1.5rem 0.5rem;
    position: sticky;
    background: var(--light-1);

    > div {
      ${layout("flex", "space-between", "center")}
      grid-gap: 1rem;

      h2 {
        color: var(--dark-1);
        font-weight: calc(var(--weight-2) + var(--weight-1));
      }
      input {
        width: 40rem;
      }
    }
  `,
  ContentContainer: styled.div`
    padding: 0 1rem 0 1rem;
    /* height: 100vh; */
  `,

  ContentMyDayFeedContainer: styled.div`
    padding: 1rem;
    background: var(--light-2);
    overflow: auto;
    width: 100%;

    ${layout("grid", "", "center")}
    grid-template-columns: repeat(auto-fill, minmax(7.2rem, auto));
    grid-gap: 0.8rem;

    > div {
      background: var(--light-1);
      height: 12rem;
      width: 7.2rem;

      &:hover {
        cursor: pointer;
        opacity: 0.9;
      }
    }

    div.my-day__create {
      ${layout("flex", "center", "center")}
      flex-direction: column;
      text-align: center;
      font-size: var(--size-3);
      background-image: unset;
    }

    div.my-day__list {
      ${layout("flex", "flex-end", "center")}
      flex-direction: column;
      text-align: center;
      font-size: var(--size-3);
      background-image: ${({ images }) => images && `url(${images})`};
      background-size: cover;
      background-repeat: no-repeat;

      div {
        margin-bottom: 1rem;
        color: var(--light-1);
      }
    }
  `,

  FeedContainer: styled.div`
    ${layout("grid", "space-between")}
    grid-template-columns: 2fr 1fr;
    grid-gap: 1rem;
    background: var(--light-2);
    padding: 1rem;
  `,

  PostsContainer: styled.div`
    ${layout("grid")}
    grid-gap: 1rem;
  `,

  PostsCreateContent: styled.div`
    padding: 1rem;
    ${layout("grid")}
    grid-gap: 1rem;
    background: var(--light-1);
    box-shadow: var(--shadow);

    > div:nth-child(1) {
      ${layout("flex", "space-between", "center")}
      grid-gap: 1rem;
    }

    > div:nth-child(3) {
      ${layout("flex", "space-between", "center")}
      grid-gap: 1rem;

      > div {
        padding: 0.5rem;
        ${layout("flex", "", "center")}
        grid-gap: .5rem;
        &:hover {
          cursor: pointer;
          background: var(--light-3);
        }
      }
    }
  `,
  PostContent: styled.div`
    background: var(--light-1);
    padding: 1rem;
    ${layout("grid")}
    grid-gap: 1rem;

    > div:nth-child(1) {
      ${layout("flex", "", "center")}
      grid-gap: 0.7rem;
      margin-bottom: 1rem;
      color: var(--dark-2);

      > div {
        line-height: 1.2rem;
        h4,
        p {
          overflow: hidden;
        }

        p {
          color: var(--dark-3);
          font-weight: var(--weight-1);
        }
      }
    }

    /* Post Content */
    > div:nth-child(2) {
      ${layout("grid")}
      grid-gap: 1rem;
      /* Post Image */
      > div:nth-child(1) {
      }

      /* Post Reactions */
      > div:nth-child(2) {
        ${layout("flex", "space-between", "")}

        > div {
          ${layout("flex")}
          grid-gap: 0.5rem;
          cursor: pointer;
        }

        > div:nth-child(1) {
          color: var(--primary-1);
        }
      }
    }

    > div:nth-child(3) {
      ${layout("flex", "", "center")}

      > div {
        ${layout("flex", "", "center")}
        background: var(--light-2);
        grid-gap: 1rem;
        padding: 0 0.5rem 0 0.5rem;
        width: 100%;
      }
    }
  `,

  SideInfoContainer: styled.div``,

  SideInfoFriendRequest: styled.div`
    background: var(--light-1);

    > div {
      padding: 1rem;
    }
    > div:nth-child(1) {
      padding: 1rem;
      ${layout("flex", "space-between", "center")}
    }

    > div:nth-child(3) {
      ${layout("flex")}
      flex-direction: column;

      > div:nth-child(1) {
        ${layout("flex", "", "center")}
        grid-gap: 0.7rem;
        margin-bottom: 1rem;
        color: var(--dark-2);

        > div {
          line-height: 1.2rem;
          h4,
          p {
            overflow: hidden;
          }

          p {
            color: var(--dark-3);
            font-weight: var(--weight-1);
          }
        }
      }

      > div:nth-child(2) {
        ${layout("flex", "", "")}
        grid-gap: 1rem;
      }
    }
  `,

  SideInfoEvents: styled.div`
    background: var(--light-1);
    > div {
      padding: 1rem;
    }

    > div:nth-child(1) {
      padding: 1rem;
      ${layout("flex", "space-between", "center")}
    }

    > div:nth-child(2) {
      ${layout("grid")}
      grid-gap: 1rem;
      color: var(--dark-2);

      div {
        ${layout("flex", "", "center")}
        grid-gap: 1rem;
        padding: 0.5rem;
      }

      > div:nth-child(1) {
        background: var(--primary-3);
      }

      > div:nth-child(2) {
        background: var(--success-2);
      }
    }
  `,
};
