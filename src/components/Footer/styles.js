import styled from "styled-components";

export const Container = styled.footer`
    width: 100vw;
    padding: 2rem 2.81rem 5rem;
    margin-top: 3rem;

    background: var(--salmon);
    color: var(--shape);
    font-size: 0.875rem;

    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 870px) {
        flex-direction: column;
    }
    h3 {
        font-size: 1.25rem;
    }
    > div {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        
        h3 {
            margin-top: 0.35rem;
        }
        img {
            width: 25px;
            height: 25px;
        }
    } 
    >footer {
        margin-top: 4rem;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        column-gap: 4em;
        row-gap: 2em;

        @media screen and (max-width: 870px) {
            width: 100%;
            flex-direction: column;
        }
        >div {
            h3 {
                padding-bottom: 0.25rem;
                margin-bottom: 1rem;
                border-bottom: 3px solid var(--shape);
            }
            p {
                line-height: 1.25rem;
            }
            a {
                display: block;
                line-height: 1.25rem;
            }
            svg {
                width: 50px;
                height: 50px;
                color: var(--shape);

                transition: all 0.4s;
            }      
            svg:hover {
                color: var(--text-title);
                width: 55px;
                height: 55px;
            }
            button {
                display: block;
                height: 1.5rem;
                text-align: left;
                color: var(--shape);
                background: transparent;
                transition: all 0.2s;
            }button:hover { color: var(--text-title)}
            > div {
                min-width: 155px;
                height: 115px;
                display: flex;
                flex-direction: column-reverse;
                justify-content: space-between;
                > section {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }
                > div {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }
            }
        }
    }
`;


