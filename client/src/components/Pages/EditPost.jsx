import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editStart,
  editSuccess,
  editFailure,
  resetEditState,
} from "../../redux/slices/editPostSlice";
import API from "../../api";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { post } = useSelector((state) => state.singlePost);
  const { loading, error } = useSelector((state) => state.editPost);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setPreview(`http://localhost:4000${post.image}`);
    }
  }, [post]);

  useEffect(() => {
    return () => dispatch(resetEditState());
  }, [dispatch]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("You must be logged in to edit a post!");

    dispatch(editStart());
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (image) formData.append("image", image);

      const { data } = await API.put(`/post/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      dispatch(editSuccess(data));
      alert("✅ Post updated successfully!");
      navigate(`/post/${id}`);
    } catch (err) {
      dispatch(editFailure(err.response?.data?.message || "Failed to update"));
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        ✏️ Edit Your Post
      </h2>

      {error && (
        <p className="text-red-500 text-center mb-3 font-medium">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          className="border px-3 py-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Content"
          className="border px-3 py-2 rounded h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <div>
          <label className="block mb-2 text-gray-600 font-medium">
            Replace Image (optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-full h-64 object-cover rounded-md border mb-3"
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Post"}
        </button>
      </form>
    </div>
  );
}

export default EditPost;
