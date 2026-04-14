import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: flex-end;
    gap: 10px;

    button {
        flex: 1;
        height: 35px;
        padding: 0 15px;
        border-radius: 10px;
        border: none;
        background-color: lightblue;
        color: darkblue;
        font-size: 1em;
        cursor: pointer;
        transition: all ease .3s;

        &:hover {
            transform: scale(1.03);
            background-color: #c2e3ff;
        }
    }
`;

export const Campo = styled.div`
    flex: 1;

    label {
        margin: 0;
        font-size: 17px;
        padding: 0;
        font-weight: bold;
        color: #000;
    }

    input, select {
        width: 100%;
        height: 35px;
        margin-top: 5px;
        padding: 0 10px;
        border: 1px solid gray;
        border-radius: 10px;
        outline: none;
        box-sizing: border-box;
        font-size: 14px;
    }
`;