import React from 'react'

import CommentBody from './CommentBody'

const Comment = ({name,comment,username}) => {
  return (
    <>
    <CommentBody name={name} comment={comment} username={username} />
    </>
  )
}

export default Comment