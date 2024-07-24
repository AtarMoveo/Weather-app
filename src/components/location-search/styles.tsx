import styled from "styled-components";

export const StyledLocationSearch = styled.section`
    position: relative;
    input {
        border-radius: 20px;
        outline-color: #d3d3d361;
        outline-width: 1px;
        border-style: none;
        padding: 0.6em 1em;
    }
    .location-options-container {
        min-width: 100%;
        position: absolute;
        background-color: white;
        color: #131313;
        border-radius: 4px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
`