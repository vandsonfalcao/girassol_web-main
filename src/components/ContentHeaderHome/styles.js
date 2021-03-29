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
        @media screen and (max-width: 720px) {
            flex-direction: column;
        }
        @media screen and (max-width: 320px) {
            div{
                margin-top: 1rem;
            }
            h1 {
                display: none;
            }
        }
    }
`;
export const Mensage = styled.div`
    max-width: 600px;

    animation: appearing-from-right 2s normal;

    h1 {
        font-size: 5rem;
        color: white;
        text-shadow: 1px 1px 2px black;
        @media screen and (max-width: 720px) {
            font-size: 4rem;
            margin-bottom: 1rem;

        }
        @media screen and (max-width: 375px) {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
    }
`;
export const Box = styled.div`
    animation: appearing-from-right 2s normal;
`;