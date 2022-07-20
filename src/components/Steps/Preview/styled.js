import styled from "styled-components";

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  height: 400px;
  overflow: auto;
  .preview-title {
    text-align: center;
    text-decoration: underline;
  }
  li {
    padding: 0.5em 0;
    display: flex;
  }
`;
