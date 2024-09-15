'use client'
import BackButton from '@/components/ui/BackButton'
import React from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from "@/hooks/use-toast"
import posts from '@/data/post'

const formSchema = z.object({
    title: z.string().min(1, {
        message: 'Title is required !!'
    }),
    body: z.string().min(1, {
        message: 'Body is required !!'
    }),
    author: z.string().min(1, {
        message: 'Author is required !!'
    }),
    date: z.string().min(1, {
        message: 'Date is required !!'
    }),
})
const PostEditPage = ({ params }) => {
    const post = posts.find((post) => post.id === params.id);
    const { toast } = useToast()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: post?.title || '',
            body: post?.body || '',
            author: post?.author || '',
            date: post?.date || '',
        }
    })
    const handleSubmit = (data) => {
        console.log(data)
        toast({
            title: "Submitted",
            description: "Post has been updated successfully.",
          })
    }
    return (
        <>
            <BackButton text={'Back to Posts'} link={'/posts'} />
            <h3 className="text-2xl mb-4">Edit Post</h3>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-8'>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Post title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="body"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Body</FormLabel>
                                <FormControl>
                                    <Textarea 
                                    placeholder="Post body" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Author</FormLabel>
                                <FormControl>
                                    <Input placeholder="Post author" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Date</FormLabel>
                                <FormControl>
                                    <Input placeholder="Post date" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className = 'w-full dark:bg-slate-800 dark:text-white'>Update Post</Button>
                </form>
            </Form>
        </>
    )
}

export default PostEditPage