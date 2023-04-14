import styled from "styled-components";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;

    width: 400px;
    padding: 60px;

    background-color: #b5e9e9;
    border: 2px solid lightblue;
    border-radius: 4px;
`;

export const Label = styled.label`
    display: flex;
    justify-content: space-between;
`;

export const Input = styled.input`
    padding: 12px;
    margin-left: 20px;

    border: 2px solid lightblue;
    border-radius: 4px;
`;

export const SubmitContact = styled.button`
    padding: 12px 24px 12px 24px;

    background-color: #fef6dd;
    border: 2px solid lightblue;
    border-radius: 4px;
`;