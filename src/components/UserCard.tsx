import { FaUserCircle } from "react-icons/fa";

interface UserCardProps {
  person: { name: string; following: boolean };
  toggleFollow: (name: string) => void;
}

const UserCard = ({ person, toggleFollow }: UserCardProps) => {
  return (
    <div className="flex items-center justify-between">
      <section className="flex items-center">
        <FaUserCircle className="text-3xl mr-4 text-gray-500" />
        <span>{person.name}</span>
      </section>

      <button onClick={() => toggleFollow(person.name)} className="px-4 py-1 rounded font-semibold cursor-pointer">{person.following ? "Unfollow" : "Follow"}</button>

    </div>
  )
}

export default UserCard