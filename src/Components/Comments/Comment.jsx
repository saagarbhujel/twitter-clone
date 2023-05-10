import React from 'react'

import CommentBody from './CommentBody'

const Comment = ({name,comment,username,avatar,_id,setShouldRefresh}) => {
  return (
    <>
    
    <CommentBody name={name} comment={comment} username={username} avatar={avatar} id={_id} setShouldRefresh={setShouldRefresh} />
    </>
  )
}

export default Comment