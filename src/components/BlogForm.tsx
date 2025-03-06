import { useState, useEffect } from "react";
import { useBlogs } from "../shared/BlogContext";
import { Blog } from "../types";

type BlogFormProps = {
  editingBlog: Blog | null;
  onClose: () => void;
};

const BlogForm: React.FC<BlogFormProps> = ({ editingBlog, onClose }) => {
  
  const { addBlog, updateBlog } = useBlogs();

  const [title, setTitle] = useState(editingBlog?.title ?? "");
  const [description, setDescription] = useState(
    editingBlog?.description ?? ""
  );
  const [image, setImage] = useState(editingBlog?.image ?? "");
  const [time, setTime] = useState(
    editingBlog?.time ??
      new Date()
        .toLocaleString("en-GB", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
        .replace(",", "")
  );

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setDescription(editingBlog.description);
      setImage(editingBlog.image);
      setTime(editingBlog.time);
    }
  }, [editingBlog]);

  const handleSubmit = () => {
    const blog: Blog = {
      id: editingBlog ? editingBlog.id : Date.now(),
      title,
      description,
      image,
      time:
        time ??
        new Date()
          .toLocaleString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          })
          .replace(",", ""),
    };

    if (editingBlog) {
      updateBlog(blog);
    } else {
      addBlog(blog);
    }

    onClose();
  };

  return (
    <div className="bg-white p-6 rounded-lg w-[30rem] mx-auto">
      <h3 className="font-semibold text-xl mb-2 text-gray-800">
        {editingBlog ? "Edit Blog" : "Add Blog"}
      </h3>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />

        <input
          type="date"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <section className="flex justify-end mt-6 space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-black"
        >
          {editingBlog ? "Edit Blog" : "Add Blog"}
        </button>

        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-6 py-2 font-semibold shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Cancel
        </button>
      </section>
    </div>
  );
};

export default BlogForm;
