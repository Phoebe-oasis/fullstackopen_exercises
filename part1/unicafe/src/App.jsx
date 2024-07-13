import { useState } from 'react'

const Button = ({handleFeedback, text}) => {
  return (
    <button onClick={handleFeedback}>{text}</button>
  )
}

const Statistics = ({sum}) => {
  return (
    <div>
      <p>good: {sum.good}</p>
      <p>neutral: {sum.neutral}</p>
      <p>bad: {sum.bad}</p>
    </div>
  )
}
function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }
  const increaseBad = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h2>Feedback</h2>
      <Button handleFeedback={increaseGood} text='good'></Button>
      <Button handleFeedback={increaseNeutral} text='neutral'></Button>
      <Button handleFeedback={increaseBad} text='bad'></Button>
      <h2>Statistics</h2>
      <Statistics sum={{good, neutral, bad}}/>
    </div>
  )
}

export default App
