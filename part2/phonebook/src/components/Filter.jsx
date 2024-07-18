const Filter = ({filterName, handleFilterNameChange}) => {
  return (
    <div>
      filter shown with name: <input 
        value={filterName}
        onChange={handleFilterNameChange}
        />
    </div>
  )
}

export default Filter