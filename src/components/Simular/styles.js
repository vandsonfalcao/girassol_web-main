import styled from 'styled-components'

export const Container = styled.div`
    background-color: #fff;
    padding: 20px;
    margin-top: 0px;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;

    strong {
        font-size: 1.5rem;
    }
    form {
        padding-top: 2rem;
        h3 {
            color: var(--salmon);
            font-size: 1rem;
            margin-bottom: 1.5rem; 
        }
    }
`;
export const ContainerButton = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 1rem;
    margin-top: 2rem;
    button {
            background: var(--salmon);
            border: 0;
            border-radius: 5px;
            padding: 10px;
            color: #ffff;
        }
`;