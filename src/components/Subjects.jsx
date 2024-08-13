import React, { useState } from 'react';

const Subjects = () => {
    const [selectedStream, setSelectedStream] = useState('');

    const commonSubjects = [
        { name: 'English', image: 'https://via.placeholder.com/100' },
        { name: 'MIL', image: 'https://via.placeholder.com/100' }
    ];

    const streams = {
        science: [
            { name: 'Physics', image: 'https://via.placeholder.com/100' },
            { name: 'Chemistry', image: 'https://via.placeholder.com/100' },
            { name: 'Mathematics', image: 'https://via.placeholder.com/100' },
            { name: 'Biology', image: 'https://via.placeholder.com/100' }
        ],
        arts: [
            { name: 'History', image: 'https://via.placeholder.com/100' },
            { name: 'Geography', image: 'https://via.placeholder.com/100' },
            { name: 'Political Science', image: 'https://via.placeholder.com/100' }
        ],
        commerce: [
            { name: 'Accounting', image: 'https://via.placeholder.com/100' },
            { name: 'Economics', image: 'https://via.placeholder.com/100' },
            { name: 'Business Studies', image: 'https://via.placeholder.com/100' }
        ]
    };

    const handleStreamChange = (event) => {
        setSelectedStream(event.target.value);
    };

    return (
        <div className="p-8">
            <div className="text-lg font-medium mb-4">Choose your Stream : </div>

            <div className="mb-4">
                <select
                    value={selectedStream}
                    onChange={handleStreamChange}
                    className="w-half p-2 border border-gray-300 rounded bg-gray-600 text-white"
                >
                    <option value="">Select a stream</option>
                    <option value="science">Science</option>
                    <option value="arts">Arts</option>
                    <option value="commerce">Commerce</option>
                </select>
            </div>

            <h3 className="font-bold border-b-4 mb-2 text-2xl">Common Subjects: </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {commonSubjects.map((subject, index) => (
                    <CommonToAll subject={subject} key={index}/>
                ))}
            </div>

            {selectedStream && (
                <>
                    <h3 className="font-bold mb-2 border-b-4 text-3xl capitalize">{selectedStream} Subjects:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {streams[selectedStream].map((subject, index) => (
                            <SelectedSubject subject={subject} index={index} key={index} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

function CommonToAll({subject,index}) {
    return <div key={index} className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg h-70 w-full object-cover" src={subject.image} alt={subject.name} />
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{subject.name}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="justify-center inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
            </a>
        </div>                  
     </div>
}

function SelectedSubject({ subject, index }) {
    return (
        <div key={index} className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg h-70 w-full object-cover" src={subject.image} alt={subject.name} />
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{subject.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="justify-center inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                </a>
            </div>
        </div>
    );
}

export default Subjects;
