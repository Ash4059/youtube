import React from 'react'
import CommentsList from './Comment'

const commentsData = [
    {
        name : "Ashish jaiswal",
        text : "Lorem ipsum dolor sit amet, consectetur adip",
        replies : [
            {
                name : "Ashish jaiswal",
                text : "Lorem ipsum dolor sit amet, consectetur adip",
                replies : []
            },
            {
                name : "Ashish jaiswal",
                text : "Lorem ipsum dolor sit amet, consectetur adip",
                replies : []
            },
            {
                name : "Ashish jaiswal",
                text : "Lorem ipsum dolor sit amet, consectetur adip",
                replies : []
            }
        ]
    },
    {
        name : "Ashish jaiswal",
        text : "Lorem ipsum dolor sit amet, consectetur adip",
        replies : [
            {
                name : "Ashish jaiswal",
                text : "Lorem ipsum dolor sit amet, consectetur adip",
                replies : [
                    {
                        name : "Ashish jaiswal",
                        text : "Lorem ipsum dolor sit amet, consectetur adip",
                        replies : []
                    }
                ]
            },
            {
                name : "Ashish jaiswal",
                text : "Lorem ipsum dolor sit amet, consectetur adip",
                replies : []
            }
        ]
    },
]

const CommentsContainer = () => {

  return (
    <div>
        <h1 className='text-xl font-bold mt-2'>Comments: </h1>
        <CommentsList comments = {commentsData} />
    </div>
  )
}

export default CommentsContainer