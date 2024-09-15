import PostPagination from '@/components/posts/PostPagination'
import PostTable from '@/components/posts/PostTable'
import BackButton from '@/components/ui/BackButton'
import React from 'react'

const PostPage = () => {
  return (
    <>
      <BackButton text={'Go back'} link = '/'/>
      <PostTable />
      <PostPagination />
    </>
  )
}

export default PostPage