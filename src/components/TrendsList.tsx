const trends = [
  { title: "React 18 Released", author: "John Doe" },
  { title: "Tailwind CSS vs Bootstrap: Which One to Choose?", author: "Jane Smith" },
  { title: "AI in Web Development", author: "Emily Johnson" },
  { title: "Vue.js 3: New Features and Improvements", author: "Ava Wilson" },
];

const TrendsList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-8">
      <h3 className="font-semibold text-lg mb-4">Today's Top Trends</h3>
      <ul className="space-y-4">
        {trends.map((trend, index) => {
          return (
            <li key={index} className="flex flex-col">
              <span className="font-medium">{trend.title}</span>
              <span className="text-small text-gray-500">By {trend.author}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TrendsList;
