import React, { useState, useEffect } from 'react';
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const MyTimeline = () => {
    // State variables to hold events from different arrays
    const [recentlyCompletedEvents, setRecentlyCompletedEvents] = useState([
        {
            title: "Recent Event 1",
            date: "February 14, 2024",
            description: "This is the description of event 1."
        },
        {
            title: "Recent Event 2",
            date: "February 15, 2024",
            description: "This is the description of event 2."
        },
        {
            title: "Recent Event 3",
            date: "February 16, 2024",
            description: "This is the description of event 3."
        }
    ]);
    const [upcomingEvents, setUpcomingEvents] = useState([
        {
            title: "Upcomming Event 1",
            date: "February 14, 2024",
            description: "This is the description of event 1."
        },
        {
            title: "Upcomming Event 2",
            date: "February 15, 2024",
            description: "This is the description of event 2."
        },
        {
            title: "Upcomming Event 3",
            date: "February 16, 2024",
            description: "This is the description of event 3."
        }
    ]);
    const [ongoingEvents, setOngoingEvents] = useState([
        {
            title: "Ongoing Event 1",
            date: "February 14, 2024",
            description: "This is the description of event 1."
        },
        {
            title: "Ongoing Event 2",
            date: "February 15, 2024",
            description: "This is the description of event 2."
        },
        {
            title: "Ongoing Event 3",
            date: "February 16, 2024",
            description: "This is the description of event 3."
        }
    ]);

    // Function to fetch events from APIs
    const fetchEvents = async () => {
        // Fetch recently completed events
        const recentlyCompletedResponse = await fetch('recently-completed-events-api');
        const recentlyCompletedData = await recentlyCompletedResponse.json();
        setRecentlyCompletedEvents(recentlyCompletedData);

        // Fetch upcoming events
        const upcomingResponse = await fetch('upcoming-events-api');
        const upcomingData = await upcomingResponse.json();
        setUpcomingEvents(upcomingData);

        // Fetch ongoing events
        const ongoingResponse = await fetch('ongoing-events-api');
        const ongoingData = await ongoingResponse.json();
        setOngoingEvents(ongoingData);
    };

    useEffect(() => {
        // fetchEvents();
    }, []);

    const container = useRef(null)
    const text = useRef(null)

    useLayoutEffect(() => {

        const context = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top center",
                    stop: "top top",
                    scrub: true
                }
            })

            if (window.innerWidth >= 768) {

                tl.to(text.current, { y: -150 }, 0)
            }

        })


        return () => context.revert();
    }, [])

    // State variable to hold the currently selected category
    const [selectedCategory, setSelectedCategory] = useState('recentlyCompleted');
    const getCategoryTitle = () => {
        switch (selectedCategory) {
            case 'recentlyCompleted':
                return 'Recently Completed Events';
            case 'upcoming':
                return 'Upcoming Events';
            case 'ongoing':
                return 'Ongoing Events';
            default:
                return 'Events';
        }
    };

    return (
        <section ref={container} className="bg-gray-950  m-auto w-[95%] my-10 text-gray-100">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 md:grid-cols-12">
                    <div ref={text} className=" md:relative top-[75px] col-span-12 md:col-span-3">
                        <div className=" text-center md:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto md:before:mx-0 before:bg-violet-400">
                            <h3 className="text-3xl font-semibold">{getCategoryTitle()}</h3>
                        </div>
                        <div className="flex md:flex-col md:space-y-2 items-center md:items-start w-full md:w-auto justify-center md:h-32">
                            <button className=' py-2 rounded md:w-fit mt-0 mx-1 h-20 px-2 bg-gray-800' onClick={() => setSelectedCategory('recentlyCompleted')}>Recently Completed</button>
                            <button className=' py-2 rounded md:w-fit mt-0 mx-1 h-20 px-2 bg-gray-800' onClick={() => setSelectedCategory('upcoming')}>Upcoming</button>
                            <button className=' py-2 rounded md:w-fit mt-0 mx-1 h-20 px-2 bg-gray-800' onClick={() => setSelectedCategory('ongoing')}>Ongoing</button>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 md:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4  before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700">
                            {/* Display events based on the selected category */}
                            {selectedCategory === 'recentlyCompleted' && (
                                recentlyCompletedEvents.map((event, index) => (
                                    <div key={index} className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-violet-400">
                                        <h3 className="text-xl font-semibold tracki">{event.title}</h3>
                                        <time className="text-xs tracki uppercase text-gray-400">{event.date}</time>
                                        <p className="mt-3">{event.description}</p>
                                    </div>
                                ))
                            )}
                            {selectedCategory === 'upcoming' && (
                                upcomingEvents.map((event, index) => (
                                    <div key={index} className="flex flex-col md:relative md:before:absolute md:before:top-2 md:before:w-4 md:before:h-4 md:before:rounded-full md:before:left-[-35px] md:before:z-[1] before:bg-violet-400">
                                        <h3 className="text-xl font-semibold tracki">{event.title}</h3>
                                        <time className="text-xs tracki uppercase text-gray-400">{event.date}</time>
                                        <p className="mt-3">{event.description}</p>
                                    </div>
                                ))
                            )}
                            {selectedCategory === 'ongoing' && (
                                ongoingEvents.map((event, index) => (
                                    <div key={index} className="flex flex-col md:relative md:before:absolute md:before:top-2 md:before:w-4 md:before:h-4 md:before:rounded-full md:before:left-[-35px] md:before:z-[1] before:bg-violet-400">
                                        <h3 className="text-xl font-semibold tracki">{event.title}</h3>
                                        <time className="text-xs tracki uppercase text-gray-400">{event.date}</time>
                                        <p className="mt-3">{event.description}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyTimeline;
