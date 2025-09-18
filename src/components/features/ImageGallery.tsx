import React, { useState } from "react";
import ImageModal from "./ImageModal";

interface ImageGalleryProps {
  images: string[];
  title: string;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  title,
  className = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) return null;

  return (
    <>
      <div className={`grid md:grid-cols-3 gap-6 ${className}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-video overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image}
              alt={`${title} - Imagen ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-2">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images}
        currentIndex={currentImageIndex}
        onPrevious={handlePreviousImage}
        onNext={handleNextImage}
        title={title}
      />
    </>
  );
};

export default ImageGallery;
