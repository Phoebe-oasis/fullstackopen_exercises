import Person from "./Person"

const Persons = ({persons, filterName, filteredPerson, deletePerson}) => {
  if(filterName){
    return(
      <div>
        {filteredPerson.map(person => 
          <Person person={person} key={person.id} deletePerson={()=>deletePerson(person.id)}/>
        )}
      </div>
      )
  }else{
    return(
      <div>
        {persons.map(person => 
          <Person person={person} key={person.id} deletePerson={() => deletePerson(person.id)}/>
        )}
      </div>
      )
  }

}

export default Persons