import styled from 'styled-components';

export const Container = styled.div`
    background-color: #3d3f43;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    img {
        max-width: 100%;
        /* height: 100%;
        object-fit: cover; */
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }
`;

export const Button = styled.button`
    margin-top: auto;
    background-color: #f46d6d;
    border: 0;
    color: #fff;
    padding: 4px 8px;
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        opacity: .85;
        transform: scale(1.03);
    }
`;