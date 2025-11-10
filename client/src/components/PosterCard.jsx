import React from "react";
import { Link } from "react-router-dom";

function PosterCard({ post }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {post.image && (
        <img
          src={`https://blog-application-1-2jag.onrender.com${post.image}`}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
          {post.title}
        </h2>

        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
          {post.content}
        </p>

        <div className="flex items-center gap-3 mb-4">
          {post.author?.profileImage && (
            <img
              src={`https://blog-application-1-2jag.onrender.com${post.author.profileImage}`}
              alt={post.author.username}
              className="w-8 h-8 rounded-full object-cover border"
            />
          )}
        </div>

        <p className="font-medium text-gray-800 text-sm">
          {post.author?.username || "Unknown Author"}
        </p>
        <p className="text-gray-400 text-xs">
          {new Date(post.createdAt).toLocaleDateString()}
        </p>

        <div className="flex justify-between items-center">
          <Link
            to={`/post/${post._id}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PosterCard;
