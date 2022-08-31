import React from 'react'

const People = ({person, deletePerson}) =>
  <li>
    {person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button>
  </li>

export default People