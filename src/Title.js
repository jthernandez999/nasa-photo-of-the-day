import React from "react"
import styled from 'styled-components'
import BackgroundUrl from './theme/url'



const StyledDiv = styled.div`
border: 1px solid #000; 
background-image: url('https://s24806.pcdn.co/wp-content/uploads/2020/05/Moon-earth-istock-970.jpg');
opacity:1;
&:hover{
opacity: 0.5;  
}
width: 100%;
height: 100%;;
color:white;
text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 0 #000;

`


export default function Title() {

    return (
    <StyledDiv >
    <h1>Nasa Photo of the Day</h1>
    </StyledDiv>
    
    )
}