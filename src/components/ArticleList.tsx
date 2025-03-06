import { useBlogs } from "../shared/BlogContext"
import { Blog } from "../types"
import ArticleCard from "./ArticleCard";

interface ArticleProps {
  onEdit: (blog: Blog) => void;
}

const ArticleList: React.FC<ArticleProps> = ({ onEdit }) => {

  const { blogs, deleteBlog } = useBlogs()

  return (
    <div className="ml-[5rem]">
       {blogs.map(blog => {
        return <ArticleCard key={blog.id} article={blog} onDelete={() => deleteBlog(blog.id)} onEdit={() => onEdit(blog)} />
       })} 
    </div>
  )
}

export default ArticleList