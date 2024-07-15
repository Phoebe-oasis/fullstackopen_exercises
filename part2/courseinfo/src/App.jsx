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

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
  },
  {
    id: 2,
    name: 'Node.js',
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }]

  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map(course => 
        <Course key={course.id} course={course} />)}
    </>
)}

export default App