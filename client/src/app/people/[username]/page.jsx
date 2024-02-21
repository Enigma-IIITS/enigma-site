"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Page({ params }) {
    const router = useRouter();
    const [person, setPerson] = useState({

        name: params.username,
        photo: "https://github.com/shadcn.png",
        bio: "I am a software engineer who loves to code and learn new things. I am passionate about building beautiful and functional web applications.",
        github: "https://github.com/janedoe",
        twitter: "https://twitter.com/janedoe",
        linkedin: "https://www.linkedin.com/in/jane-doe",
        events: ["event-1", "event-2"],
        projects: ["project-1", "project-2"],
        socialMediaPosts: ["https://facebook.com/janedoe", "https://twitter.com/janedoe", "https://instagram.com/janedoe"], // Example social media links

    });

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             const response = await fetch(`API_ENDPOINT/${params.username}`);
    //             if (!response.ok) {
    //                 throw new Error("User not found");
    //             }
    //             const data = await response.json();
    //             setPerson(data);
    //         } catch (error) {
    //             router.push("/404");
    //         }
    //     };

    //     if (params.username) {
    //         fetchUserData();
    //     } else {
    //         router.push("/404");
    //     }
    // }, [params.username, router]);

    // if (!person) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className="bg-gray-900 text-white px-4 py-8 my-10">
            <div className="flex flex-col gap-4 items-center">
                <Image className=" rounded" width={200} height={200} src={person.photo} alt={person.name} />
                <h1 className="text-3xl font-bold">{person.name}</h1>
                <p className="text-gray-400 max-w-[90%]">{person.bio}</p>

                <div className="flex flex-wrap gap-4 mt-4">
                    {person.github && (
                        <a
                            href={person.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 flex items-center gap-2"
                        >
                            <FontAwesomeIcon icon={faGithubSquare} size="lg" />
                            <span>GitHub</span>
                        </a>
                    )}
                    {person.twitter && (
                        <a
                            href={person.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 flex items-center gap-2"
                        >
                            <FontAwesomeIcon icon={faXTwitter} />
                            <span>Twitter</span>
                        </a>
                    )}
                    {person.linkedin && (
                        <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 flex items-center gap-2"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            <span>LinkedIn</span>
                        </a>
                    )}
                </div>

                {person.events && person.events.length > 0 && (
                    <div className="mt-4">
                        <p className="text-gray-200  pb-1 border-b-2 text-center mb-1">Events</p>
                        <ul className="list-disc pl-3 text-gray-300">
                            {person.events.map((event) => (
                                <li key={event}>
                                    <a href={`/events/${event}`}>{event}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {person.projects && person.projects.length > 0 && (
                    <div className="mt-4">
                        <p className="text-gray-200  pb-1 border-b-2 text-center mb-1">Projects</p>
                        <ul className="list-disc pl-3 text-gray-300">
                            {person.projects.map((project) => (
                                <li key={project}>{project}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
