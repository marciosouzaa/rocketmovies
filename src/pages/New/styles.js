import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};   

  > main {
    grid-area: content;
    overflow-y: auto;
  }
  >main::-webkit-scrollbar {
    width: 12px;               /* width of the entire scrollbar */
  }
  >main:hover::-webkit-scrollbar {
    background: ${({ theme}) => theme.COLORS.BACKGROUND_700 };
  }

  >main::-webkit-scrollbar-track {
    background: ${({ theme}) => theme.COLORS.BACKGROUND_800 };        /* color of the tracking area */
  }

  >main::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};    /* color of the scroll thumb */
    border-radius: 4px;       /* roundness of the scroll thumb */
    border: 2px solid ${({theme}) => theme.COLORS.ORANGE};  /* creates padding around scroll thumb */
  }

  .tags {
    height: 90px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #0D0C0F;
    gap: 20px;
    padding-top: 15px;
    padding-left: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
  }
  
`

export const Form = styled.form`
  max-width: 1130px;
  margin: 38px auto;

  > header {
    
    align-items: center;
    
    margin-bottom: 36px;

    svg{
      margin-right: 5px;
    }
    >a{
      width: fit-content;
      display: flex;
      text-align: center;
      align-items: center;
      margin-bottom: 20px;
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }
  >.titlerating{
    display: flex;
    gap: 40px;
    margin-bottom: 30px;
  }
  .buttons{
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 80px;
  }
  .buttonDelete{
    margin-top: 16px;
    width: 100%;
    height: 56px;
    background-color: #0D0C0F;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 10px;
  }
  h2{
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin: 25px 0 24px 0;
  }
  
`
