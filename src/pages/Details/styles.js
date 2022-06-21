import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    
    'content';

    .movieRating{
      display: flex;

      gap: 20px;

      h1{
        margin-bottom: 24px;
      }
      svg{
        position: relative;
        top: 10px;
        height: 20px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
      }
      .rated {
            fill:  ${({ theme }) => theme.COLORS.ORANGE};
        }
    }
    
`

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Content = styled.div`
    width: 1130px;
  
    margin: 0 auto;
    grid-area: content;
    padding-right: 5px;
    overflow-y: auto ;


    > p  {
        flex: none;
        order: 1;
        align-items: stretch;
        flex-grow: 0;
        margin-top: 40px;
        text-align: justify;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-right: 20px;
        white-space: pre-wrap;


    }

    .tags{
      margin-top: 30px;
      span{
        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MIXED} ;

      }
    }

    ::-webkit-scrollbar {
        width: 12px;
    }
    :hover::-webkit-scrollbar {
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

export const Author = styled.div`

    display: flex;

    padding: 10px 0;

    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    

    > img {
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100} ;
        margin-right: 10px;
    }

    > span {
        margin-left: 5px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > svg {
        margin: 2px 5px 0 20px;
        
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;