import React from 'react'

interface SquareProps {
    boxName: string;
    
}

const Square = ({boxName}: SquareProps) => {
  return (
    <div className="square">{boxName}</div>
  )
}

export default Square