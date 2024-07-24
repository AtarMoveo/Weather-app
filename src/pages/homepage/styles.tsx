import styled from "styled-components";

export const StyledHomepage = styled.main`
    display: grid;
    gap: 20px;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    .main-forecast-wrapper {
        @media (min-width: 768px) {
            grid-column: 1 / -1;
        }
    }

`

export const StyledMainContainer = styled.section`
    background-color: rgb(163, 210, 254, 0.4);
    border-radius: 8px;
    padding: 1em 2em;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
`

export const StyledSectionHeader = styled.h2`
    margin-block: 0.7em 1em;
`