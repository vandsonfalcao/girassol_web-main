import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 80%;

    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
        width: 100%;
        height: 70%;

        display: flex;
        align-items: center;
        justify-content: space-between;
        
        @media screen and (max-width: 768px) {
            flex-direction: column-reverse;
            gap: 3rem;
            margin-top: 20rem;
        }
        @media screen and (max-width: 375px) {
            flex-direction: column-reverse;
            gap: 1rem;
            margin-top: 25rem;
        }
        @media screen and (max-width: 320px) {
            margin-top: 15rem;
            img {
                display: none;
            }
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