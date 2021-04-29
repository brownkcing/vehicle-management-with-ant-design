import React from 'react';
import styled from 'styled-components';

const TopTitle = styled.div`
    display:flex;
    justify-content: center;
    transition: 0.3s all ease;
    position: relative;
    width: 100%;
    height: 8vh;
    z-index: 1999;
    color: black
    box-sizing: border-box;
    background-color: rgb(122, 222, 174);
`;

const TopText = styled.div`
    display:flex;
    align-items: center;
`;

function Top() {
    return (
        <div>
            <TopTitle>
                <TopText>
                    Vehicle Management
                </TopText>
            </TopTitle>
        </div>
    );
};

export default Top;