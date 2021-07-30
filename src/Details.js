import React from 'react'
import styled from 'styled-components'
import URL from './theme/url'


const StyledTitle = styled.h2`

color:white;

`
const StyledImgVid = styled.div`
background-image: url('https://sm.mashable.com/t/mashable_in/photo/default/nasa-galaxy_9pu4.1920.jpg');

`
const StyledParagraph = styled.p`
display: flex;
justify-content: space-evenly;
text-align: center;
width: 100%;
color: white;
`
const StyledDiv = styled.div`

`



export default function Details(props) {
const { title, url, media_type, copyright, explanation } = props
    return (
    <div>
        <StyledTitle>
            {title}
        </StyledTitle>

        <StyledImgVid className='img-video'>
        {media_type === 'image' ? (
        <img src={url} alt={title} />
        ) : (
        <iframe
        title='space-video'
        src={url}
        frameBorder='0'
        gesture='media'
        allow='encrypted-media'
        allowFullScreen
        className='photo'/>
        )}  
        </StyledImgVid>

        <StyledParagraph className='copyright'>copyright: {copyright}</StyledParagraph>
        
        <StyledParagraph className='exStyledExplanationlanation'>{explanation}</StyledParagraph>

    </div>
    )
}