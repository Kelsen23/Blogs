
const topics = [
  "Technology",
  "Design Thinking",
  "Crypto",
  "NFT",
  "Personal Growth",
  "Reading"
];

const TopicsList = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg mt-8">
      <h3 className="font-semibold text-lg mb-4">Topics For You</h3>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic, index) => {
          return (
              <span key={index} className="px-3 py-1 bg-gray-300 cursor-pointer text-sm rounded-full hover:bg-gray-700 transition duration-300">
                {topic}
              </span>
          )
        })}
      </div>
    </div>
  )
}

export default TopicsList