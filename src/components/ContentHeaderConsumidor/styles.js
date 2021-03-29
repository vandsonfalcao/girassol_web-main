import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: calc(100% - 9rem);

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        justify-content: center;
        img {
            display: none;
        }
    }
`;
export const Mensage = styled.div`
    max-width: 600px;

    animation: appearing-from-right 2s normal;

    img {
        width: 100%;
    }
`;
export const Box = styled.div`
    animation: appearing-from-right 2s normal;
`;