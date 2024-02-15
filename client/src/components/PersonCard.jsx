import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"


const PersonCard = ({ name, position }) => {
    return (
        <Card className='text-center  w-[150px] md:w-[250px] md:my-0 my-4 ' >
            <CardHeader>
                <Avatar className="m-auto h-[75px] w-[75px] md:h-[100px] md:w-[100px] mb-3" >
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{position}</CardDescription>
            </CardHeader>
            <CardFooter  >
                <a href="#" target="_blank" className="m-auto text-sm" rel="noopener noreferrer">profile_link</a>
            </CardFooter>
        </Card>

    )
}

export default PersonCard
