import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "#B6C4B6"};
  color: ${(p) => (p.color ? "#163020" : "#163020")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #EEF0E5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(152 251 152 / 20%);

  &:hover,
  &:active,
`;
