import PropTypes from 'prop-types'
import { useState } from "react";

const Blog = ({blog, handleBookmark, handleReadingTime}) => {
    // console.log(handleBookmark(blog))
    const {id, title, authorName, coverImage, profilePic, tags, readingTime} = blog

    const [isBookmarked, setIsBookmarked] = useState(false)

    const handleIsBookmarked = () => {
        console.log(12)
        setIsBookmarked((prev) => !prev)
        
    }

  return (
    <>
     <div className="md:p-4 p-2 border border-solid border-slate-400 rounded-lg">
        <img className="lg:max-h-64 md:max-h-64 w-full rounded-md" src={coverImage} alt="" />
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 my-2">
                <img className="w-6 lg:w-10 h-6 lg:h-10 rounded-[50%] animate-spin" src={profilePic} alt="" />
                <h3 className="font-semibold font-prociono">{authorName}</h3>
            </div>
            <div className="flex items-center gap-1">
                <span className="font-medium font-prociono">{readingTime} read</span>
                <button onClick={() => handleBookmark(blog)} className="text-xl hover:text-gray-700">
                    <svg onClick={handleIsBookmarked} xmlns="http://www.w3.org/2000/svg" fill={isBookmarked === true ? 'black' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                </button>
            </div>
        </div>
        <h1 className="text-xl md:text-xl font-bold font-prociono">{title}</h1>
        <div className="flex gap-4 my-2 font-prociono">
            <span className="text-purple-600">{tags.hashtags[0]}</span>
            <span className="text-purple-600">{tags.hashtags[1]}</span>
            <span className="text-purple-600">{tags.hashtags[2]}</span>
        </div>
        <button onClick={() => handleReadingTime(id, readingTime)}>
            <a className="text-purple-700 decoration-solid underline font-prociono" href="#">Mark as Read</a>
        </button>
     </div>
    </>
  )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func
}

export default Blog
