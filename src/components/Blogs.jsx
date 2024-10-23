import { useEffect } from "react"
import { useState } from "react"
import Blog from "./Blog"
import PropTypes from 'prop-types'

const Blogs = ({handleBookMark, handleReadingTime}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

  return (
    <>
      <div className="lg:w-3/4 mx-auto space-y-8">
        <h1 className="text-center text-4xl font-bold font-prociono">Recent Blogs</h1>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-4">
        {
            blogs.map((blog) => <Blog key={blog.id} blog={blog} handleBookmark={handleBookMark} handleReadingTime={handleReadingTime}></Blog>)
        }
        </div>
      </div>
    </>
  )
}

Blogs.propTypes = {
    handleBookmark: PropTypes.func
}

export default Blogs
