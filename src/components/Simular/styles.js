import styled from 'styled-components'

export const Container = styled.div`
    background-color: #fff;
    padding: 20px;
    margin-top: 0px;
    max-width: 320px;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;

    strong {
        font-size: 1.5rem;
    }
    form {
        h1 {
            font-size: 0.75rem; 
            padding-top: 32px;
        }
    }
    &:last-child {
        
    }
`;
export const ContainerButton = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 1rem;
    margin-top: 36px;
    button {
            background: var(--salmon);
            border: 0;
            border-radius: 5px;
            padding: 10px;
            color: #ffff;
        }
`;