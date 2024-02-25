'use client'
import Image from 'next/image'
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyGallery from '@/components/events/MyGallary'
import SmallPerson from '@/components/SmallPerson'

library.add(fab)

const event = {
    "title": "Example Event",
    "slug": "example-event",
    "summary": "This is a dummy event.",
    "coverImage": {
        "sm": "https://picsum.photos/id/200/350/400/",
        "md": "https://picsum.photos/id/200/800/400/",
        "lg": "https://picsum.photos/id/200/1080/300/",
        "thumb": "https://picsum.photos/id/200/1080/300/"
    },
    "startDateTime": "2024-02-21T00:00:00Z",
    "endDateTime": "2024-02-21T01:00:00Z",
    "venue": "IIIT Sri City",
    "eventType": "string",
    "sponsors": [
        {
            "sponsorName": "Example Sponsor 1",
            "logo": "https://github.com/shadcn.png",
            "url": "https://www.example.com/sponsor1"
        },
        {
            "sponsorName": "Example Sponsor 2",
            "logo": "https://github.com/shadcn.png",
            "url": "https://www.example.com/sponsor2"
        }
    ],
    "socialMediaPosts": [
        "https://www.facebook.com/exampleevent",
        "https://www.twitter.com/exampleevent"
    ],
    "description": "<p>This is a description of the event.</p>",
    "acceptRegistrations": true,
    "completed": false,
    "managers": ["user1", "user2"],
    "organizers": ["user3"],
    "volunteers": ["user4", "user5"],
    "gallery": [
        "https://picsum.photos/id/1018/1000/600/",
        "https://picsum.photos/id/1015/1000/600/",
        "https://picsum.photos/id/1019/1000/600/"
    ]
}

const gallery = []
event.gallery.forEach((url) => {
    const imageObject = {
        original: url,
        thumbnail: url,
        originalClass: ' rounded-lg  overflow-hidden',
        thumbnailClass: ' rounded-lg  overflow-hidden',
    }
    gallery.push(imageObject)
})
const Page = () => {
    return (
        <div className="text-white px-4 w-[95%] m-auto mb-10">
            <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-col items-center gap-4 w-full justify-between">
                    {event.coverImage && (
                        <>
                            {event.coverImage.sm && (
                                <img
                                    src={event.coverImage.sm}
                                    alt=""
                                    className="object-cover rounded-lg shadow-md shadow-blue-500/40 sm:hidden "
                                />
                            )}
                            {event.coverImage.md && (
                                <img
                                    src={event.coverImage.md}
                                    alt=""
                                    className={`object-cover rounded-lg shadow-md shadow-blue-500/40 ${event.coverImage.sm ? "hidden" : ""} sm:block ${event.coverImage.lg ? "md:hidden" : ""} `}
                                />
                            )}
                            {event.coverImage.lg && (
                                <img
                                    src={event.coverImage.lg}
                                    alt=""
                                    className={`object-cover rounded-lg shadow-md shadow-blue-500/40 hidden md:block`}
                                />
                            )}
                            <h1 className="text-3xl font-bold text-blue-500">
                                {event.title}
                            </h1>
                            <p className="text-gray-400">{event.summary}</p>
                            <div className="text-center py-5 my-5 border-y-2 border-white">
                                <div className="flex gap-5 items-center mb-4">
                                    <p className="text-gray-200">
                                        <span className="material-symbols-outlined text-5xl">
                                            date_range
                                        </span>
                                    </p>
                                    <p>
                                        {formatDateTime(event.startDateTime)}
                                        <p>To</p>
                                        {formatDateTime(event.endDateTime)}
                                    </p>
                                </div>
                                <p className="text-gray-200 flex items-center justify-center gap-3">
                                    <span className="material-symbols-outlined">
                                        location_on
                                    </span>{' '}
                                    {event.venue}
                                </p>
                            </div>
                        </>
                    )}
                </div>
                {event.acceptRegistrations && (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Register Now
                    </button>
                )}
                <div
                    className="html-content"
                    dangerouslySetInnerHTML={{ __html: event.description }}
                />

                {event.sponsors.length > 0 && (
                    <div className="flex flex-col gap-4 mt-4 items-center">
                        <p className="text-gray-200">Sponsors</p>
                        <div className="flex flex-wrap gap-4 mt-4 items-center justify-around">
                            {event.sponsors.map((sponsor) => (
                                <a
                                    key={sponsor.sponsorName}
                                    href={sponsor.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-blue-500"
                                >
                                    <img
                                        src={sponsor.logo}
                                        alt={sponsor.sponsorName}
                                        className="max-h-[100px] max-w-200px rounded"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                <MyGallery images={gallery} />

                <div className="flex flex-col gap-2 mt-4 items-center">
                    {event.managers.length > 0 && (
                        <p className="text-gray-200 mb-2 pb-2 border-b-2 text-xl ">
                            Event Managers
                        </p>
                    )}
                    <div className="flex flex-wrap gap-2 ">
                        {event.managers.map((manager) => (
                            <SmallPerson key={manager} name={manager} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-4 items-center">
                    {event.organizers.length > 0 && (
                        <p className="text-gray-200 mb-2 pb-2 border-b-2 text-xl ">
                            Organizers
                        </p>
                    )}
                    <div className="flex flex-wrap gap-2 ">
                        {event.organizers.map((organizer) => (
                            <SmallPerson key={organizer} name={organizer} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-4 items-center">
                    {event.volunteers.length > 0 && (
                        <p className="text-gray-200 mb-2 pb-2 border-b-2 text-xl ">
                            Volunteers
                        </p>
                    )}
                    <div className="flex flex-wrap gap-2 ">
                        {event.volunteers.map((volunteer) => (
                            <SmallPerson key={volunteer} name={volunteer} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page

function formatDateTime(dateTimeString) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const date = new Date(dateTimeString)
    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    let hours = date.getHours()
    const minutes = date.getMinutes()
    const period = hours >= 12 ? 'pm' : 'am'

    // Convert hours from 24-hour format to 12-hour format
    hours = hours % 12
    hours = hours ? hours : 12 // Handle midnight (0 hours)

    const formattedDate =
        day +
        getOrdinalSuffix(day) +
        ' ' +
        month +
        ' ' +
        year +
        ' ' +
        hours +
        ':' +
        (minutes < 10 ? '0' : '') +
        minutes +
        period
    return formattedDate
}

function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
        return 'th'
    }
    switch (day % 10) {
        case 1:
            return 'st'
        case 2:
            return 'nd'
        case 3:
            return 'rd'
        default:
            return 'th'
    }
}
