import React from 'react'
import Square from './Square'

export default ({ squareNumbers, squares, makeMove }) => (
  <div className="row-container">
    <Square
      squareNumber={squareNumbers[0]}
      makeMove={makeMove}
      contents={squares[0]}
    />
    <Square
      squareNumber={squareNumbers[1]}
      makeMove={makeMove}
      contents={squares[1]}
    />
    <Square
      squareNumber={squareNumbers[2]}
      makeMove={makeMove}
      contents={squares[2]}
    />
  </div>
)
