"use client";
import React from "react";
import { useSelector } from "react-redux";

const PostCount = () => {
  const posts = useSelector((state: any) => state.posts);

  // Calculate the post count
  const postCount = posts.length;

  return (
    <div >
      <p>Post Count: {postCount}</p>
    </div>
  );
};

export default PostCount;
