import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerStart: false,
    timerSeconds: 0,
  }
  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerStart: false, timerSeconds: 0})
  }

  onStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerStart: false})
  }
  updateTime = () => {
    this.setState(prevState => ({
      timerSeconds: prevState.timerSeconds + 1,
    }))
  }

  onStart = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerStart: true})
  }
  renderTimerDisplay = () => {
    const {timerSeconds} = this.state

    const minutes = Math.floor(timerSeconds / 60)
    const seconds = Math.floor(timerSeconds % 60)

    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }
  render() {
    const {isTimerStart} = this.state
    const time = this.renderTimerDisplay()
    return (
      
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                alt="stopwatch"
              />
              <p className="timer-desc">Timer</p>
            </div>
            <div className="timer-running-section">
              <h1>{time}</h1>
            </div>
            <div className="timer-control-section">
              <button
                type="button"
                className="btn start-btn"
                onClick={this.onStart}
                disabled={isTimerStart}
              >
                Start
              </button>
              <button
                type="button"
                className="btn stop-btn"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn reset-btn"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
