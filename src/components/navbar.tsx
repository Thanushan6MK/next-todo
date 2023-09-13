import React from 'react'
import PostCount from './postCount'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <Link href="/">
          post
      </Link>
      {"  "}
      <Link href="/posts">
         add post
      </Link>
      <PostCount />
    </div>
  )
}

export default Navbar