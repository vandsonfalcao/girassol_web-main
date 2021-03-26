import styled from "styled-components";

export const Container = styled.footer`
    width: 100vw;
    background:red;
    
    animation: sliding-from-bottom 2s normal;
    >.rodape {
        width: 100%;
        height: 100%;
        padding: 2rem 2.81rem 5rem;

        background: var(--salmon);
        color: var(--shape);
        font-size: 0.875rem;

        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
        justify-content: space-between;

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
            display: flex;
            justify-content: space-around;
            flex-direction: row;
            gap: 2em;

            >div {
                h3 {
                    padding-bottom: 0.25rem;
                    margin-bottom: 1rem;
                    border-bottom: 2px solid var(--shape);
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
}
`;

