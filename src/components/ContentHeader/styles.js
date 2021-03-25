import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    
    & > div {
        width: 100%;
        margin-top: 35px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
export const Mensage = styled.div`
    max-width: 600px;

    animation: appearing-from-right 2s normal;
    h1 {
        font-size: 5rem;
        color: white;
        text-shadow: 1px 1px 2px black;
    }
`;
export const Box = styled.div`
    animation: appearing-from-right 2s normal;
`;