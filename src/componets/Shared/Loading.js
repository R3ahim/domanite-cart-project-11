import React from 'react';
const Loading = ({ cylon, green }) => {
    return (
        <div className="flex items-center justify-center mt-48 ">
             <div className="w-16 h-16 border-b-2 border-red-600 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;