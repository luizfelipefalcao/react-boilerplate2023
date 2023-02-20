import styled from "styled-components";

export interface SpacerProps {
    height?: number
}

export const Wrapp = styled.div<SpacerProps>`
    width: 100%;
    height: ${({ height }) => height}em;
    background-color: green;
`;