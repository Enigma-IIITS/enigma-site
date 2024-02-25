"use client"
import { useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { Icons } from '@/components/icons'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const profileFormSchema = z.object({
  fullName: z
    .string()
    .min(5, {
      message: "Full Name must be at least 5 characters."
    })
    .max(30, {
      message: "Full Name must not be longer than 30 characters."
    }),
  profilePic: z.string().url({ message: "Please enter a valid URL." }).optional(),
  bio: z
    .string()
    .max(160)
    .min(4),
  personalSite: z.string().url({ message: "Please enter a valid URL." }).optional(),
  github: z.string().url({ message: "Please enter a valid URL." }).optional(),
  twitter: z.string().url({ message: "Please enter a valid URL." }).optional(),
  linkedin: z.string().url({ message: "Please enter a valid URL." }).optional(),
  insta: z.string().url({ message: "Please enter a valid URL." }).optional()
})

const defaultValues = {
  bio: "I own a computer."
}

export function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange"
  })

  const { fields, append, remove } = useFieldArray({
    name: "urls",
    control: form.control
  })

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profilePic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile Picture</FormLabel>
              <FormControl>
                <Input placeholder="URL for your profile picture" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          <h2 className=" font-medium">URLs</h2>

        <FormField
          control={form.control}
          name="personalSite"
          render={({ field }) => (
            <FormItem>
              <FormControl  >
                <div className=" flex gap-3" >
                  <span className="material-symbols-outlined flex justify-center items-center">
                    language
                  </span>
                  <Input placeholder="URL for your personal site" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



        <FormField
          control={form.control}
          name="github"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className=" flex gap-3 items-center" >
                  <FontAwesomeIcon className="h-7" icon={faGithub} />
                  <Input placeholder="URL for your GitHub profile" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="twitter"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className=" flex gap-3 items-center" >
                  <FontAwesomeIcon className="h-6" icon={faXTwitter} />
                  <Input placeholder="URL for your Twitter profile" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="linkedin"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className=" flex gap-3 items-center" >
                  <FontAwesomeIcon className="h-7" icon={faLinkedin} />
                  <Input placeholder="URL for your LinkedIn profile" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="insta"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className=" flex gap-3 items-center" >
                  <FontAwesomeIcon className="h-7" icon={faInstagram} />
                  <Input placeholder="URL for your Instagram profile" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  )
}
