import styled from 'styled-components';

export const RecipeInfo = styled.div`
    display:flex;
    gap:16px;
    border: 1px solid black;
    padding: 8px;
    border-radius: 4px;
`;

export const InfoBlock = styled.div`
    display:flex;
    align-items:center;
    gap:12px;

    svg {
        color:red;
    }
`;

export const BadgeList = styled.div`
    display:flex;
    gap:8px;
`;

export const Badge = styled.span`
    background-color: lightgray;
    padding: 8px 16px;
    border-radius: 8px;
`;
