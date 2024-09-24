import styled from "styled-components";

export const SobreStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;

  p {
    max-width: 600px;
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: center;
    background-color: var(--color1);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
