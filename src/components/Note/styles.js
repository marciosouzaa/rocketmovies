import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_MIXED};

    border: none;    
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;

    text-align: right;
    cursor: pointer;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};

        display: flex;
        justify-content: space-between;

        > svg {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        width: 20px;
        height: auto;
        cursor: pointer;
        transition: all 300ms;
        }

        > svg:hover {
            transform: scale(1.2);            
            color: red;
        }
    }

    > h2 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
        margin-bottom: 20PX;

        > svg{
            color: ${({ theme }) => theme.COLORS.ORANGE};            
        }

        > .rated {
            fill:  ${({ theme }) => theme.COLORS.ORANGE};
        }
    }
    
    > p  {
        flex: none;
        order: 1;
        align-items: stretch;
        flex-grow: 0;

        text-align: justify;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        

        height: 40px;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
        width: fit-content;
        span{
            
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800} ;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
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
    }

    > svg {
        margin: 2px 5px 0 20px;
        
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`;

