import { useState } from "react";
import UserCard from "./UserCard";

const peopleToFollow = [
  { name: "Alena Gouse", following: false },
  { name: "Ruben Batour", following: false },
  { name: "Aspen Stanton", following: false },
  { name: "Madelyn George", following: false },
];

const PeopleToFollow = () => {

  const [people, setPeople] = useState(peopleToFollow);

  const toggleFollow = (name: string) => {
    setPeople(prev => prev.map(person => person.name === name ? { ...person, following: !person.following } : person));
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text lg mb-4">People To Follow</h3>  
      <div className="space-y-4">
        {people.map((person, index) => {
          return <UserCard key={index} person={person} toggleFollow={toggleFollow} />
        })}
      </div>
    </div>
  );
};

export default PeopleToFollow;
