import styled from 'styled-components';

export const Container = styled.div<{ $size: number, $left: number, $top: number, $sidePos: number }>`
    width: ${props => props.$size}px;
    height: ${props => props.$size}px;
    position: absolute;
    left: ${props => props.$left}px;
    top: ${props => props.$top}px;
    background-image: url('/assets/char.png');
    background-position: 0px ${props => props.$sidePos}px;
    
`;

export const Name = styled.div`
    color: #fff;
    position: absolute;
    top: -28px;
    background-color: #0000006c;
    font-size: 14px;
    padding: 2px 5px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
`;