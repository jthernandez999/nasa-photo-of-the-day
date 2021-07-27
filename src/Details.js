import React from 'react'

export default function Details(props) {
const { title, url, media_type, copyright, explanation } = props
    return (
    <div>
        <h2>{title}</h2>

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
      <p>copyright: {copyright}</p>
      <h4>{explanation}</h4>

    </div>
    )
}