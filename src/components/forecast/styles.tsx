import styled from "styled-components";

export const StyledForecast = styled.section`
    .weather-location {
        margin-block: 1em;
    }
    .weather-temp {
        font-size: 7rem;
        font-weight: 400;
            span {
            font-size: 1rem;
        }
    }
    img {
        width: 80px 
    }
    .weather-details {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-block: 1em;    
        font-weight: 400;
    }
`