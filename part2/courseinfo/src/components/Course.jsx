const Total = ({total}) => {
  return(
    <p>total of {total} exercises</p>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name}: {part.exercises}</p>
  )
}

const Content = ({parts}) => {
  return (
    parts.map((part) => 
      <Part key={part.id} part={part}
    />)
  )
}
const Header = ({courseName}) => {
  return (
    <h2>{courseName}</h2> 
  )
}

const Course = ({course}) => {
  const total = course.parts.reduce((sum,curr)=>sum + curr.exercises, 0)
  return (
    <div>
    <Header courseName={course.name}/>
    <Content parts={course.parts}/>
    <Total total={total}/>
  </div>
  )
}

export default Course