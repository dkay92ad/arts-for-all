import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  background-image: linear-gradient(-180deg, #8f592c, gray);
`;

export const Cover = styled.img`
  position: fixed;
  height: 95vh;
  opacity: 0.5;
  mix-blend-mode: overlay;
`;

export const CoverContentBox = styled.div`
  width: 100%;
  height: 300px;
  @media (min-width: 600px) {
    & {
      width: 50%;
    }
  }
`;

export const CoverContentHeader = styled.h3`
  color: #fff;
  font-size: 2.5rem;
  text-shadow: #000 1px 2px 5px;
  @media (min-width: 600px) {
    & {
      font-size: 3rem;
      text-shadow: #000 1px 2px 5px;
    }
  }
`;

export const CoverContent = styled.p`
  color: #fff;
  font-size: 2rem;
  -webkit-text-stroke: thin;
  text-shadow: #000 1px 2px 5px;
  @media (min-width: 600px) {
    & {
      font-size: 2.5rem;
    }
  }
`;
