import styled from 'styled-components'

export const Container = styled.div`
    width:80vw;
    height: 7.5rem;
    margin-top: 0.65rem;

    padding-bottom: 10px;
    border-bottom: 1px solid #666;

    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 0;
    @media screen and (max-width: 768px) {
      display: none;
    }
    section {
        font-size: 1rem;
        justify-self: flex-end;
    }
`;
export const Menu = styled.div`
    display: grid;
        grid-template-columns: 1fr 90%;
        gap: 0;
        
        div {
            display: flex;
            align-items: center;
            justify-content: space-around;

            button {
                background: transparent;
                font-size: 1.25rem;
                color: var(--text-title);
                font-weight: 600;

                opacity: 0.7;
                transition: all 0.2s;
            }
            button:hover {
                opacity: 1;
            }
        }
`;