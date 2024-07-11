
const Header = ({name}) => {
  return (
    <h1>{name}</h1> 
  )
}

const Part = ({part, exercise}) => {
  return (
      <p>{part} {exercise}</p>
  )
}

const Total = ({total}) => {
  return(
    <p>Number of exercises {total[0] + total[1] + total[2]}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Part part={part1} exercise={exercises1}/>
      <Part part={part2} exercise={exercises2}/>
      <Part part={part3} exercise={exercises3}/>
      <Total total={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

export default App
