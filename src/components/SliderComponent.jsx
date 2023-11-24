import React from 'react'

function SliderComponent(props) {
    const {imgUrl} = props
  return (
    <div>
        <img src={imgUrl} alt="" />
    </div>
  )
}

export default SliderComponent