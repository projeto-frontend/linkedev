import styled from "styled-components";

export const Container = styled.aside`
  display: none;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 470px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: var(--gray-color-new);
    color: var(--black);
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: 40px 30px;

    header {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 136px;
        border-radius: 50%;
        margin-bottom: 20px;
      }

      span {
        font-size: 16px;
      }

      h1 {
        font-family: var(--font-family-2);
        margin-top: 10px;
        font-size: 19px;
        font-weight: 700;
      }
    }

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      p {
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }

    button {
      width: 100%;
      border-radius: 8px;
      padding: 15px 0;
      border: 1px solid var(--primary-3-color);
      color: var(--primary-new);
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  }
`;
