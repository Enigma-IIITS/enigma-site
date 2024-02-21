"use client"
import Image from "next/image";
import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyGallery from "@/components/events/MyGallary";

library.add(fab);


const event = {
    title: "Example Event",
    summary: "This is a dummy event.",
    coverImage: "https://github.com/shadcn.png",
    startDateTime: "2024-02-21T00:00:00Z",
    endDateTime: "2024-02-21T01:00:00Z",
    venue: "Example Venue",
    sponsors: [
        {
            name: "Example Sponsor 1",
            logo: "https://github.com/shadcn.png",
            url: "https://www.example.com/sponsor1",
        },
        {
            name: "Example Sponsor 2",
            logo: "https://github.com/shadcn.png",
            url: "https://www.example.com/sponsor2",
        },
    ],
    socialMediaPosts: [
        "https://www.facebook.com/exampleevent",
        "https://www.twitter.com/exampleevent",
    ],
    description: "<p>This is a description of the event.</p>",
    acceptingRegistrations: true,
    completed: false,
    eventManagers: ["user1", "user2"],
    organizers: ["user3"],
    volunteers: ["user4", "user5"],
    gallery: ["https://picsum.photos/id/1018/1000/600/", "https://picsum.photos/id/1015/1000/600/", "https://picsum.photos/id/1019/1000/600/"],
};

const gallery = []
event.gallery.forEach(url => {
    const imageObject = {
        original: url,
        thumbnail: url,
        originalClass: " rounded-lg  overflow-hidden",
        thumbnailClass: " rounded-lg  overflow-hidden"
    };
    gallery.push(imageObject);
});
const Page = () => {
    return (
        <div className="bg-gray-900 text-white px-4 py-8 w-[95%] m-auto my-10">
            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-3xl font-bold text-blue-500">{event.title}</h1>
                <p className="text-gray-400">{event.summary}</p>

                <div className="flex flex-col items-center gap-4 w-full justify-between">
                    {event.coverImage && (
                        <Image
                            src={event.coverImage}
                            alt={event.title}
                            width={200}
                            height={200}
                            className=" object-cover rounded-lg shadow-md shadow-blue-500/40"
                        />
                    )}
                    <div className=" text-center">
                        <p className="text-gray-200">Date & Time:</p>
                        <p>
                            {new Date(event.startDateTime).toLocaleString()} -{" "}
                            {new Date(event.endDateTime).toLocaleString()}
                        </p>
                        <p className="text-gray-200">Venue:</p>
                        <p>{event.venue}</p>
                    </div>
                </div>

                {event.sponsors.length > 0 && (
                    <div className="flex flex-wrap gap-4 mt-4 items-center">
                        <p className="text-gray-200">Sponsors:</p>
                        {event.sponsors.map((sponsor) => (
                            <a
                                key={sponsor.name}
                                href={sponsor.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-blue-500"
                            >
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="w-8 h-8 rounded-full"
                                />
                                <span>{sponsor.name}</span>
                            </a>
                        ))}
                    </div>
                )}

                {event.socialMediaPosts.length > 0 && (
                    <div className="flex flex-wrap gap-4 mt-4">
                        <p className="text-gray-200">Follow us on:</p>
                        {event.socialMediaPosts.map((post) => (
                            <a
                                key={post}
                                href={post}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700"
                            >
                                {post.includes("facebook") && (
                                    <FontAwesomeIcon icon={['fab', 'facebook-f']} size="lg" />
                                )}
                                {post.includes("twitter") && (
                                    <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
                                )}
                            </a>
                        ))}


                    </div>
                )}

                <div className="html-content" dangerouslySetInnerHTML={{ __html: event.description }} />

                {event.acceptingRegistrations && (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Register Now
                    </button>
                )}

                <MyGallery images={gallery} />

                <div className="flex flex-wrap gap-2 mt-4">
                    {event.eventManagers.length > 0 && (
                        <p className="text-gray-200">Event Managers:</p>
                    )}
                    {event.eventManagers.map((manager) => (
                        <a href={`/people/${manager}`} key={manager} className="text-blue-500 hover:underline">
                            {manager}
                        </a>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-4">


                    {event.organizers.length > 0 && (
                        <p className="text-gray-200">Organizers:</p>
                    )}
                    {event.organizers.map((organizer) => (
                        <a href={`/people/${organizer}`} key={organizer} className="text-blue-500 hover:underline">
                            {organizer}
                        </a>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-4">

                    {event.volunteers.length > 0 && (
                        <div className="mt-4">
                            <p className="text-gray-200">Volunteers:</p>
                            <ul className="list-disc pl-6 text-gray-300">
                                {event.volunteers.map((volunteer) => (
                                    <li key={volunteer}>
                                        <a href={`/people/${volunteer}`} className="text-blue-500 hover:underline" >{volunteer}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>

                <div className="mt-8">
                    <p className="text-gray-200 text-sm">
                        This event was created by user1. Last updated on February 21, 2024.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;

