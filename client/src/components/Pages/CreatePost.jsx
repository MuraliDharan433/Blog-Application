import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import { addPost } from "../../redux/slices/postSlice";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    const { data } = await API.post("/post", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    dispatch(addPost(data.newPost));
    navigate("/");
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create a Post</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          className="border px-3 py-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="border px-3 py-2 rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="file"
          className="border px-3 py-2 rounded"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
