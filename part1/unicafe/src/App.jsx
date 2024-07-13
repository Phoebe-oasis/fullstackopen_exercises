import { useState } from 'react'

const Button = ({handleFeedback, text}) => {
  return (
    <button onClick={handleFeedback}>{text}</button>
  )
}

const StatisticLine = (props) => {
  if(props.text === 'positive'){
    return(
      <tr>
        <th>{props.text}: </th>
        <td>{props.value} %</td>
      </tr>
    )
  }
  return(
    <tr>
      <th>{props.text}:</th>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = ({sum}) => {
  const all = sum.good + sum.bad + sum.neutral
  const average = (sum.good - sum.bad) / all
  const positive = sum.good / all * 100
  if(all === 0){
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table border="1px solid black" >
      <tbody >
        <StatisticLine text="good" value={sum.good}/>
        <StatisticLine text="neutral" value={sum.neutral}/>
        <StatisticLine text="bad" value={sum.bad}/>
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={positive}/>
      </tbody>
    </table>
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
