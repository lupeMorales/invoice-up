import styled from "styled-components";
export const GetAvatarStyled = styled.div`
  .get-avatar {
    display: flex;
    margin: 30px 0;
    justify-content: center;
    align-items: center;
  }
  label {
    font-size: ${(props) => props.theme.fontSizes.xsmall};
    color: ${(props) => props.theme.color.light_text};
    font-weight: 300;
  }

  .get-avatar__label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background: deeppink;
    border-radius: 15px;
    border: 0;
    font-family: sans-serif;
    font-size: 20px;
    padding: 10px 20px;
    color: #fff;
  }

  .get-avatar__upload-field {
    display: none;
  }

  .get-avatar__preview {
    background-color: #fff;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid #ccc;
    height: 50px;
    margin-left: 15px;
    width: 100px;
  }
`;
