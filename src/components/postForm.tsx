"use client";
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "@/redux/slices/postsSlice";
import { useState } from 'react';

const PostForm = () => {
 const posts = useSelector((state: any) => state.posts);
   const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

     const handleAddPost = (e: any) => {
    e.preventDefault();

    if(!title && !description) return;

    const newPost = {
      id: Date.now(),
      title,
      description,
    };

    dispatch(addPost(newPost));

    // Reset form fields
    setTitle('');
    setDescription('');
  };


  return (
     <form onSubmit={handleAddPost}>
        <input
          type="text"

          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /> <br />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <button  onClick={handleAddPost}>Add New Post</button>
      </form>
  )
}

export default PostForm