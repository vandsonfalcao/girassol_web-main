import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;

    animation: sliding-from-top 2s normal;
    @media screen and (max-width: 3840px) {
      display: none;
    }
    @media screen and (max-width: 850px) {
      display: flex;
    }
`;

export const MenuBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 1rem;

    background: var(--salmon);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    > div {
        display: flex;
        align-items: center;
        img {
            width: 2.5rem;
            margin-right: 0.5rem;
        }
        span {
            display: inline-block;
            color: var(--shape);
            font-weight: 600;
            font-size: 1.25rem;
        }
    }
`;
export const ButtonBurger = styled.button`
    width: 80px;
    height: 80px;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: transparent;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    .menu-btn {
        width: 50px;
        height: 6px;
        margin: 5px 0;

        background: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(255,101,47, .2);
        
        transition: all 0.5s ease-in-out;
    }
    .mid.open  {
        transform: translateX(50px);
        background: transparent;
        box-shadow: none;
    }
    .up.open {
        transform: rotate(45deg) translate(11px, 12px);
    }
    .down.open {
        transform: rotate(-45deg) translate(11px, -12px);
    }
`;

export const MenuColumn = styled.div`
    display: flex;
    flex-direction: column;

    .menu-item {
        transform: translateX(100vw);
    
        display: block;
        text-decoration: none;
        width: 100%;
        padding: 1rem 1rem;
        
        font-size: 2rem;
        color: white;
        
        background: var(--text-body);
        border-bottom: solid 1px var(--salmon);
    }
    .menu-item:nth-child(1){
        transition: all .1s ease-in-out;
    } 
    .menu-item:nth-child(2){
        transition: all .2s ease-in-out;
    } 
    .menu-item:nth-child(3){
        transition: all .3s ease-in-out;
    } 
    .menu-item:nth-child(4){
        transition: all .4s ease-in-out;
    } 
    .menu-item:nth-child(5){
        transition: all .5s ease-in-out;
    } 
    .menu-item:nth-child(6){
        transition: all .6s ease-in-out;
    } 
    .hidden-menu {
        transform: translateX(0);
    }
`;