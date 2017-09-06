import React, { Component } from 'react'
import { difference } from 'lodash/array'
import Row from './Row'

const winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

const initialState = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: '',
  currentTurn: 'X',
  message: (
    <div style={{ flex: 1 }}>
      <h2>Tic Tac Toe</h2>
    </div>
  ),
  playing: true
}

export default class Board extends Component {
  constructor() {
    super()
    this.state = initialState
  }

  makePlayerMove = squareNumber => {
    const state = this.state
    if (!this.state[squareNumber] && this.state.playing) {
      this.setState({
        ...state,
        [squareNumber]: state.currentTurn,
        currentTurn: 'O'
      })
    }
  }

  componentDidUpdate = () => {
    if (this.state.playing) {
      this.checkWin()
    }
    this.makeCPUMove()
  }

  makeCPUMove = () => {
    const { currentTurn, playing } = this.state
    if (currentTurn === 'O' && playing) {
      const emptySquares = Object.keys(this.state).filter(k => !this.state[k])

      const dangerSquares = []

      emptySquares.forEach(squareNumber => {
        winningCombos.forEach(combo => {
          if (difference(combo, this.getOSquares().concat(squareNumber)) > 1) {
            dangerSquares.push(squareNumber)
          }
        })
      })

      const selectedSquare = emptySquares.sort(
        i => !dangerSquares.includes(i)
      )[0]

      this.setState({ ...this.state, [selectedSquare]: 'O', currentTurn: 'X' })
    }
  }

  getXSquares = () =>
    Object.keys(this.state)
      .filter(
        k =>
          this.state[k] === 'X' &&
          !['currentTurn', 'playing', 'message'].includes(k)
      )
      .map(i => parseInt(i))

  getOSquares = () =>
    Object.keys(this.state)
      .filter(
        k =>
          this.state[k] === 'O' &&
          !['currentTurn', 'playing', 'message'].includes(k)
      )
      .map(i => parseInt(i))

  checkWin = () => {
    const Xsquares = this.getXSquares()
    const Osquares = this.getOSquares()

    winningCombos.forEach(combo => {
      if (!difference(combo, Xsquares).length) {
        this.renderWin('X')
      }
      if (!difference(combo, Osquares).length) {
        this.renderWin('O')
      }
    })
  }

  resetGame = () => {
    this.setState(initialState)
  }

  renderWin = winningChar => {
    const message = (
      <div style={{ flex: 1 }}>
        <h1>{winningChar} wins!</h1>
        <button onClick={() => this.resetGame()}>Reset</button>
      </div>
    )
    this.setState({ ...this.state, playing: false, message })
  }

  render() {
    return (
      <div>
        {this.state.message}
        <div className="board-container">
          <Row
            squareNumbers={[1, 2, 3]}
            makeMove={this.makePlayerMove}
            squares={[this.state[1], this.state[2], this.state[3]]}
          />
          <Row
            squareNumbers={[4, 5, 6]}
            makeMove={this.makePlayerMove}
            squares={[this.state[4], this.state[5], this.state[6]]}
          />
          <Row
            squareNumbers={[7, 8, 9]}
            makeMove={this.makePlayerMove}
            squares={[this.state[7], this.state[8], this.state[9]]}
          />
        </div>
      </div>
    )
  }
}
