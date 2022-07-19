import styled from 'styled-components';

export const ChooseArtContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* gap: 1em; */
`;

export const DayTimeContainer = styled.div`
    display: flex;
    flex-direction: column;
    & .MuiTextField-root{
        margin: 0.5rem 0.7rem;
    }
    @media (min-width: 600px) {
        &{
            flex-direction: row;
        }
        & .MuiTextField-root{
            justify-content: center;
            margin: 0;
        }
    }
`;