import styled from "styled-components";

export const PersonalDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 600px) {
        &{
            flex-direction: row;
        }
    }
`;