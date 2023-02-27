import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1.7rem;
`;

export const Title = styled.div`
    background:#000;
    color:#fff;
    padding:0.625rem;
    width:40rem;
    border-radius:0.625rem;

    @media(max-width:750px) {
        width:20rem;
        margin:auto;
    }

    h1 {
        text-align:center;
    }
`;

export const ToDoContent = styled.div`
    border:0.06rem solid #cbd5e1;
    border-radius:0.625rem;
    width:40rem;
    padding:0.625rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    @media(max-width:750px) {
        width:20rem;
        margin:auto;
    }
`;

export const InputBox = styled.form`
    display:flex;
    gap:1rem;
    padding:0.625rem 1rem;
    margin-bottom:1rem;

    input {
        padding:1rem;
        border-radius:0.625rem;
        border:1px solid #cbd5e1;
        outline:none;

        @media(max-width:750px) {
            width:5rem;
            margin:auto;
        }
    }

    button {
        padding:1rem;
        border-radius:0.625rem;
        border:none;
        background-color:#000;
        color:#fff;
        width:12rem;
        cursor:pointer;
        transition:0.3s;

        @media(max-width:750px) {
            margin:auto;
        }
    }

    button:hover{
        background-color:#22c55e;
    }
`;

export const itemContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:0.4rem;
`;

export const itemContent = styled.div`
    padding:0 1rem;
    display:flex;
    justify-content:space-between;
    align-items:center;

    .check-box {
        display:flex;
        align-items-center;
        gap:0.4rem;
    }

    .check-box input {
        width:1.4rem;
        cursor:pointer;
    }

    label {
        font-weight:bold;
        font-size:1.4rem;
        margin-bottom:0;
    }

    .icons {
        display:flex;
        gap:0.5rem;
    }

    .icons .icon, .trash{
        cursor:pointer;
    }

    .icons .trash{
        color:#e11d48;
    }
`;

export const cleanItems = styled.div`
    display:flex;
    justify-content:end;
    align-items:end;

    p {
        color:#9ca3af;
        font-weight:bold;
        cursor:pointer;
    }
`