import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;

    animation: sliding-from-top 2s normal;
`;

export const MenuBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--salmon);
    
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    img {
        width: 4rem;
        margin: 10px;
    }
    a {
        margin-right: 20px;
        svg {
            color: white;
            
        }
    }
`;

export const MenuColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;    

    background: #666;

    animation: appearing-from-top 0.5s normal;
    button {
        font-size: 2rem;
        color: white;
        margin: 15px 0 15px 30px; 
        background: transparent;
    }
`;


