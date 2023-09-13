"use client"
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "@/redux/slices/postsSlice";
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const SinglePost = ({ id }: { id: number }) => {
  const router = useRouter()
  const posts = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();

  const post = posts.find((post: any) => post.id === Number(id))

  useEffect(() => {
    if (post) {
      document.title = post.title;
    }
  }, [post]);

  const handleRemovePost = (postId: number ) => {
    dispatch(deletePost(postId));
    router.push('/posts')
  };

  return post ? (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <button onClick={() => handleRemovePost(post.id)}>Delete</button>
      <Link href="/posts">
        Back to posts
      </Link>
    </div>
  ) : (
    <div>No post found.</div>
  )
}

export default SinglePost
