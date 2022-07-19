import Styled from 'styled-components';

export const ContentContainer = Styled.div`
    height: 90%;
    width: ${(props) => (props.isHome ? "inherit" : "95%")};
    margin: 0 auto;
    padding: ${(props) => (props.isHome ? "2em 0 0" : "1em 0")};
`;