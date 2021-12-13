import styled from 'styled-components'

export const SoundComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;
`

export const SoundButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;

  color: rgba(255, 255, 255, 0.5);

  transition: 0.3s;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    img {
      opacity: 0.8;
    }

    border-radius: 10%;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);
  }

  &.selected {
    color: rgba(255, 255, 255, 1);
    img {
      opacity: 1;
    }

    border-radius: 10% 10% 0 0;
    background: rgba(255, 255, 255, 0.1);
  }

  .icons {
    font-size: 80px;
  }

  img {
    width: 80px;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
      brightness(102%) contrast(102%);
    opacity: 0.7;
  }

  @media (max-width: 800px) {
    &:hover {
      background: none;
      box-shadow: none;
    }

    &.selected {
      background: none;
    }
  }
`
