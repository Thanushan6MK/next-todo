"use client";
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "@/redux/slices/postsSlice";
import Link from 'next/link'

const PostsList = () => {
      const posts = useSelector((state: any) => state.posts);
      const dispatch = useDispatch();

      const handleRemovePost = (postId: number ) => {
      dispatch(deletePost(postId));
  };
  return (
   <table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Description</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {posts ? (
      posts.map((post: any) => (
        <tr key={post.id}>
         <td>
              <Link href={`/posts/${post.id}`} id={post.id} title={post.title}>
                {post.title}
              </Link>
            </td>
          <td>{post.description}</td>
          <td>
            <button onClick={() => handleRemovePost(post.id)}>Delete</button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3}>No posts found.</td>
      </tr>
    )}
  </tbody>
</table>

  )
}

export default PostsList