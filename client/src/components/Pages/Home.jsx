import React from "react";
import { useEffect } from "react";
import API from "../../api";
import PosterCard from "../PosterCard";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../redux/slices/postSlice";

function Home() {
  const { posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const { data } = await API.get("/post");
        dispatch(setPosts(data));
      } catch (error) {
        console.log("Error in fetching a Posts :", error);
      }
    };

    fetchApi();
  }, [dispatch]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        📰 Latest Blog Posts
      </h1>

      {posts.length === 0 ? (
        <p className="text-gray-600 text-center text-lg">
          No posts available. Be the first to create one!
        </p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PosterCard post={post} key={post._id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
