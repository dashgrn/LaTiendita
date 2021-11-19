import React from 'react'

export const ProductGridItem = ({name,image}) => {
  return (
    <div className="card">
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
  )
}