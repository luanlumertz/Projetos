import styled from 'styled-components';

export const Container = styled.div`
    hr {
        height: 1px;
        border: 0;
        background-color: #16195c;
        margin: 30px 0;
    }

    button {
        background-color: #25cd89;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 15px;
    }

    .backButton {
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #b8b8d4;
    }
`;

export const Info = styled.div`
    margin-bottom: 30px;
`;

export const Title = styled.div`
    font-size: 25px;
    color: #fff;
    font-weight: bold;
`;

export const Description = styled.div`
    font-size: 14px;
    color: #b8b8d4;
    margin-top: 10px;
`;

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
        margin-bottom: 20px;
    }

    .titleTag {
        display: inline-block;
        margin: 0;
        padding: 0;
        font-weight: bold;
        font-size: 20px;
    }

    .dataTag {
        display: inline-block;
        margin: 0;
        padding: 0;
        font-size: 17px;
    }
`;