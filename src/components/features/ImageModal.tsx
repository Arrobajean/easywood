import React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  title?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrevious,
  onNext,
  title,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") onPrevious();
    if (e.key === "ArrowRight") onNext();
    if (e.key === "Escape") onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="backdrop-blur-md bg-black/20" />
      <DialogContent
        className="max-w-6xl w-full h-full max-h-[90dvh] p-0 border-0 bg-transparent"
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-modal="true"
        aria-label={`Galería de imágenes: ${title || "Proyecto"}`}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 backdrop-blur-sm bg-white/10 border border-white/20 text-white rounded-full hover:bg-white/20 transition-colors"
            aria-label="Cerrar galería de imágenes"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={onPrevious}
                className="absolute left-4 z-10 p-2 backdrop-blur-sm bg-white/10 border border-white/20 text-white rounded-full hover:bg-white/20 transition-colors"
                aria-label="Imagen anterior"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>
              <button
                onClick={onNext}
                className="absolute right-4 z-10 p-2 backdrop-blur-sm bg-white/10 border border-white/20 text-white rounded-full hover:bg-white/20 transition-colors"
                aria-label="Siguiente imagen"
                disabled={currentIndex === images.length - 1}
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>
            </>
          )}

          {/* Image */}
          <img
            src={images[currentIndex]}
            alt={`${title || "Proyecto"} - Imagen ${currentIndex + 1} de ${
              images.length
            }`}
            className="max-w-full max-h-full object-contain"
            role="img"
          />

          {/* Image Counter */}
          {images.length > 1 && (
            <div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 backdrop-blur-sm bg-white/10 border border-white/20 text-white rounded-full text-sm"
              aria-live="polite"
              aria-label={`Imagen ${currentIndex + 1} de ${images.length}`}
            >
              {currentIndex + 1} de {images.length}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
