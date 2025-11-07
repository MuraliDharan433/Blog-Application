import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearPost,
  fetchFailure,
  fetchStart,
  fetchSuccess,
} from "../../redux/slices/singlePostSlice";
import API from "../../api";

function PostDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { post, loading, error } = useSelector((state) => state.singlePost);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchPost = async () => {
      dispatch(fetchStart());
      try {
        const { data } = await API.get(`/post/${id}`);
        dispatch(fetchSuccess(data));
      } catch (error) {
        dispatch(fetchFailure("Failed to load post"));
        console.log(error);
      }
    };
    fetchPost();

    return () => {
      dispatch(clearPost());
    };
  }, [id, dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Loading post...
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-red-500 text-lg mb-4">{error || "Post not found"}</p>
        <Link to="/" className="text-blue-600 hover:text-blue-800 underline">
          Back to Home
        </Link>
      </div>
    );
  }

  const canEdit = user && post.author && user._id === post.author._id;

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await API.delete(`/post/${id}`);
        alert("🗑️ Post deleted successfully!");
        navigate("/"); // go back to home
      } catch (err) {
        alert(err.response?.data?.message || "Failed to delete post");
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 font-medium inline-block mb-6"
      >
        ← Back to Home
      </Link>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {post.image && (
          <img
            src={`http://localhost:4000${post.image}`}
            alt={post.title}
            className="w-full h-80 object-cover"
          />
        )}

        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>

            {canEdit && (
              <div className="flex gap-2">
                <button
                  onClick={() => navigate(`/edit/${post._id}`)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  ✏️ Edit
                </button>

                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  🗑️ Delete
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 mb-4">
            {post.author?.profileImage && (
              <img
                src={`http://localhost:4000${post.author.profileImage}`}
                alt={post.author.username}
                className="w-10 h-10 rounded-full object-cover border"
              />
            )}
            <div>
              <p className="font-medium text-gray-800">
                {post.author?.username || "Unknown Author"}
              </p>
              <p className="text-gray-500 text-sm">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
            {post.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
