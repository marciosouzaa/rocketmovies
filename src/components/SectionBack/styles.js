import styled from 'styled-components'

export const Container = styled.section`
  grid-area: SectionBack;
    
    margin: 40px auto 24px;
    height: fit-content;

    display: flex;
    align-items: center;

  > a {
      color: ${({theme}) => theme.COLORS.ORANGE};
      width: fit-content;
      font-weight: 400;

      svg{
        margin-right: 7px;
      }
    }

`