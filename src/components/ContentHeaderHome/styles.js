import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: calc(100% - 9rem);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    
    @media screen and (max-width: 720px) {
        flex-direction: column;
        justify-content: center;
    }
    @media screen and (max-width: 320px) {
        h1 {
            display: none;
        }
    }
`;
export const Mensage = styled.div`
    max-width: 60%;

    animation: appearing-from-right 2s normal;

    @media screen and (max-width: 720px) {
        max-width: 100%;
    }   
    h1 {
        font-size: 5rem;
        color: white;
        text-shadow: 1px 1px 2px black;
        @media screen and (max-width: 720px){
            font-size: 4rem;
        }
        @media screen and (max-width: 710px){
            font-size: 3rem;
        }
        @media screen and (max-width: 400px){
            font-size: 2.5rem;
        }
    }
`;
export const Box = styled.div`
    animation: appearing-from-right 2s normal;
`;