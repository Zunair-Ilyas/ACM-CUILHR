import React from 'react';

const PastEvents = ({ events }) => {
    return (
        <section>
            <h1 className="text-4xl font-bold text-center mb-8 text-white">Past Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                    <div key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-40 object-cover" // Reduced height for past event cards
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">{event.title}</h3>
                            <p className="text-gray-500">{event.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PastEvents;
