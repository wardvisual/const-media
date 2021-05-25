import React from "react";
import styled from "styled-components";
import { layout } from "../../globalStyle";

const { BadgeContainer } = {
  BadgeContainer: styled.div`
    background: ${({ bgColor }) => (bgColor ? bgColor : "var(--primary-1)")};
    color: ${({ color }) => (color ? color : "var(--light-1)")};
    border-radius: 50rem;
    height: ${({ size }) => (size ? `${size}rem` : "1.7rem")};
    width: ${({ size }) => (size ? `${size}rem` : "1.7rem")};
    overflow: hidden;
    ${layout("flex", "center", "center")}
    text-align: center;
  `,
};

const Badge = ({ text, color, bgColor, size }) => {
  return (
    <BadgeContainer bgColor={bgColor} color={color} size={size}>
      <p>{text}</p>
    </BadgeContainer>
  );
};

export default Badge;
