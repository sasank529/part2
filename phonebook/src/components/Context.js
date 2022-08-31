import React from 'react'
import People from './People'

const Context = ({persons, allPersons, deletePerson}) => {
  console.log(persons.length)
  if (persons.length === 0) {
    return (
      <ul>
        {allPersons.map((person, i) =>
          <People key={i} person={person} deletePerson={deletePerson} />
        )}
      </ul>
    )
  } else {
    return (
      <ul>
        {persons.map((person, i) =>
          <People key={i} person={person} deletePerson={deletePerson} />
        )}
      </ul>
    )
  }
}

export default Context