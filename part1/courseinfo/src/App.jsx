
const Header = ({name}) => {
  return (
    <h1>{name}</h1> 
  )
}

const Content = ({part, exercise}) => {
  return (
      <div>
        <p>
          {part[0]} {exercise[0]}
        </p>
        <p>
          {part[1]} {exercise[1]}
        </p>
        <p>
          {part[2]} {exercise[2]}
        </p>
      </div>
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
      <Content part={[part1, part2, part3]} exercise={[exercises1, exercises2, exercises3]}/>
      <Total total={[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

export default App
