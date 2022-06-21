import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    /* grid-template-columns:  250px auto; */
    grid-template-rows:  105px 128px auto 64px;
    grid-template-areas: 
    "header"
    "search"
    "content"
    "content";

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};    
`;


export const Content = styled.div`
    width: 1130px;
    margin: 0 auto;
    grid-area: content;
    padding-right: 5px;
    overflow-y: auto ;

    ::-webkit-scrollbar {
        width: 10px;
    }
    >main:hover::-webkit-scrollbar {
    background: ${({ theme}) => theme.COLORS.BACKGROUND_700 };
  }

    ::-webkit-scrollbar-track {
        background: ${({ theme}) => theme.COLORS.BACKGROUND_800 };
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};    /* color of the scroll thumb */
    border-radius: 4px;       /* roundness of the scroll thumb */
    border: 2px solid ${({theme}) => theme.COLORS.ORANGE};
    }
`;


export const NewNote = styled(Link)`
    grid-area: newnote;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: 8px;
    }
`;

