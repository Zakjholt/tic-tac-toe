import React from 'react'

export default ({ makeMove, contents, squareNumber }) => (
  <div onClick={() => makeMove(squareNumber)} className="square-container">
    {contents}
  </div>
)
