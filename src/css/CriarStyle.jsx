import styled from "styled-components";

export const CriarStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color7);
  
  .usuario {
    background-color: var(--color1);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }

  button {
    padding: 0.75rem;
    background-color: #213550;
    color: #fff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.5s;
  }

  button:hover {
    background-color: blue;
  }
`;
