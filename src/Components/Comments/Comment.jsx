import React from 'react'

import CommentBody from './CommentBody'

const Comment = ({name,comment,username,_id}) => {
  return (
    <>
    <CommentBody name={name} comment={comment} username={username} id={_id} />
    </>
  )
}

export default Comment