import styled from 'styled-components'

const LocalHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 15vh;

  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);

  h1 {
    font-weight: 600;

    a {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.89);
    }
  }

  @media (min-width: 800px) {
    box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.05);
  }
`

export default LocalHeader
