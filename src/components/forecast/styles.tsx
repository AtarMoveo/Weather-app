import styled from "styled-components";

export const StyledForecast = styled.section`
    .weather-location {
        margin-block: 1em;
        font-size: 1.5rem;
    }
    .weather-temp {
        font-size: 7rem;
        position: relative;
        font-weight: 400;
            span {
                position: absolute;
                font-size: 3rem;
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