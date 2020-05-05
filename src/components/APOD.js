import React from "react";
import styled from 'styled-components';

const Image = styled.img `
    max-width: 50%;
    max-height: 350px;
`
const TitleData = styled.h1 `
    font-size: 30px;
    color: blue;
`

const DateData = styled.p `
    color: red;
`

const Apod = props => {
    if(props.data) {
        return (
            <div>
                <div><Image src= {props.data.url} alt= ""/></div>
                <TitleData>{props.data.title}</TitleData>
                <DateData>{props.data.date}</DateData>
            </div>        
        )
    }else {
        return <div>loading</div>

    }
}


export default Apod;