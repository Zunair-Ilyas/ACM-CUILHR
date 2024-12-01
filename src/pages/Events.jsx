import React from 'react';
import SliderSection from '../components/SliderSection';
import PastEvents from '../components/PastEvents.jsx';
import image1 from '../../public/assets/event.jpg';
import FooterSection from "../components/FooterSection.jsx";

const eventsData = {
    upcoming: [
        {
            id: 1,
            eventName: 'Event 1',
            description: 'Join us for this amazing event!',
            eventImage: image1,
        },
        {
            id: 2,
            eventName: 'Event 2',
            description: 'Don’t miss out on our upcoming event!',
            eventImage: image1,
        },
        {
            id: 3,
            eventName: 'Event 3',
            description: 'An exciting day awaits you!',
            eventImage: image1,
        },
    ],
    past: [
        { id: 1, image: image1, title: 'Past Event 1', date: 'April 15, 2022' },
        { id: 2, image: image1, title: 'Past Event 2', date: 'June 1, 2022' },
        { id: 3, image: image1, title: 'Past Event 3', date: 'September 20, 2022' },
        { id: 4, image: image1, title: 'Past Event 3', date: 'September 20, 2022' },
        { id: 5, image: image1, title: 'Past Event 3', date: 'September 20, 2022' },
        { id: 6, image: image1, title: 'Past Event 3', date: 'September 20, 2022' },
        { id: 7, image: image1, title: 'Past Event 3', date: 'September 20, 2022' },
        { id: 8, image: image1, title: 'Past Event 3', date: 'September 20, 2022' },
    ],
};

const ACMEvents = () => {
    return (
        <div
            className="font-sans text-gray-800 max-w-7xl mx-auto p-6 space-y-16 bg-[#00000] min-h-screen"
        >
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-100">Upcoming Events</h1>
            <SliderSection SliderData={eventsData.upcoming} />
            <PastEvents events={eventsData.past} />
            <FooterSection />
        </div>
    );
};

export default ACMEvents;
