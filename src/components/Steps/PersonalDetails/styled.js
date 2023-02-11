import styled from "styled-components";

export const PersonalDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  height: 400px;
  overflow: auto;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    & {
      flex-direction: row;
    }
  }
`;
