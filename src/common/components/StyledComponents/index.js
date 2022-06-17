import Styled from 'styled-components';

export const ContentContainer = Styled.div`
    height: 90%;
    overflow: auto;
    padding: ${(props) => (props.isHome ? "2em 0 0" : "1em 0")};
`;