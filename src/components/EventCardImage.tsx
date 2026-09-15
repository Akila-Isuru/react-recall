import React from "react";

interface EventCardImageProps {
  imageUrl: string;
  title: string;
}

const EventCardImage: React.FC<EventCardImageProps> = ({ imageUrl, title }) => {
  return (
    <div className="relative w-full sm:w-40 h-40 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
          No Image
        </div>
      )}

      <span className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/40 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-3.5 h-3.5 text-white"
          aria-hidden="true"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
        </svg>
      </span>
    </div>
  );
};

export default EventCardImage;
