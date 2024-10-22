import { useEffect } from "react"
import { useState } from "react"
import Blog from "./Blog"

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

  return (
    <>
      <div className="border-4 border-solid border-blue-500 lg:w-3/4 mx-auto">
        <h1 className="text-center">Blogs: {blogs.length}</h1>
        <div className="grid lg:grid-cols-2 gap-4">
        {
            blogs.map((blog) => <Blog key={blog.id} blog={blog}></Blog>)
        }
        </div>
      </div>
    </>
  )
}

export default Blogs
