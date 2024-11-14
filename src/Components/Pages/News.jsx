import React, { useState } from "react";

export default function News({ news }) {
  const {
    _id,
    others_info: { is_todays_pick, is_trending },
    category_id,
    rating: { number, badge },
    total_view,
    title,
    author: { name, published_date, img },
    thumbnail_url,
    image_url,
    details,
  } = news;

  // State to toggle the visibility of the full article
  const [showFullArticle, setShowFullArticle] = useState(false);

  // Function to toggle the visibility
  const toggleArticleVisibility = () => {
    setShowFullArticle(!showFullArticle);
  };

  return (
    <div className="border rounded-lg shadow-md mb-6 overflow-hidden bg-white">
      {/* Header */}
      <div className="flex justify-between items-center bg-gray-100 p-4">
        <div className="flex items-center gap-3">
          <img className="w-12 h-12 rounded-full" src={img} alt={`${name}`} />
          <div>
            <p className="font-semibold text-gray-800">{name}</p>
            <p className="text-sm text-gray-600">{new Date(published_date).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="flex gap-4 text-gray-600">
          <p className="cursor-pointer hover:text-blue-500">Bookmark</p>
          <p className="cursor-pointer hover:text-blue-500">Share</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category Badges */}
        <div className="flex items-center gap-2 mb-2">
          {is_todays_pick && <span className="px-2 py-1 bg-green-200 text-green-800 text-xs rounded">Today's Pick</span>}
          {is_trending && <span className="px-2 py-1 bg-red-200 text-red-800 text-xs rounded">Trending</span>}
          <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded">Category {category_id}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>

        {/* Thumbnail Image */}
        {thumbnail_url && (
          <img
            className="w-full h-64 object-cover mb-4 rounded"
            src={thumbnail_url}
            alt={`${title} thumbnail`}
          />
        )}

        {/* Short Details (Preview) */}
        <p className="text-gray-700 leading-relaxed mb-4">
          {showFullArticle ? details : `${details.substring(0, 200)}...`}
        </p>

        {/* Read More Button */}
        {!showFullArticle && (
          <button
            onClick={toggleArticleVisibility}
            className="text-blue-500 font-semibold hover:text-blue-700"
          >
            Read More
          </button>
        )}

        {/* Main Image */}
        {showFullArticle && image_url && (
          <img className="w-full h-auto object-cover rounded mb-4" src={image_url} alt={title} />
        )}

        {/* Rating and Views */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-600">Views: <span className="font-semibold text-gray-800">{total_view}</span></p>
          <p className="text-sm text-gray-600">
            Rating: <span className="font-semibold text-gray-800">{number}</span> - {badge}
          </p>
        </div>
      </div>
    </div>
  );
}
