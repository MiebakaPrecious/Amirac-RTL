import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GalleryItem } from '@/contexts/GalleryContext';

interface FlipCardProps {
  item: GalleryItem;
}

const FlipCard = ({ item }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/gallery');
  };

  const handleArrowHover = (hovering: boolean) => {
    setIsFlipped(hovering);
  };

  return (
    <div 
      className="perspective-1000 h-72 cursor-pointer"
      onClick={handleCardClick}
    >
      <div
        className={`relative w-full h-full preserve-3d transition-transform duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] ${
          isFlipped ? 'rotate-x-180' : ''
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden">
          <img
            src={item.url}
            alt={item.filename}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Arrow overlay button */}
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-10"
            onMouseEnter={() => handleArrowHover(true)}
            onMouseLeave={() => handleArrowHover(false)}
            onClick={(e) => e.stopPropagation()}
          >
            <ArrowUpRight className="w-6 h-6" />
          </button>
          
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white font-semibold text-lg">{item.service_group}</p>
          </div>
        </div>
        
        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden rounded-lg overflow-hidden bg-primary p-6 flex flex-col justify-center items-center text-center"
          style={{ transform: 'rotateX(180deg)' }}
          onMouseEnter={() => handleArrowHover(true)}
          onMouseLeave={() => handleArrowHover(false)}
        >
          <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">
            {item.service_group}
          </h3>
          <p className="text-primary-foreground/90 text-sm mb-6 leading-relaxed">
            {item.description || 'Professional engineering services delivered with excellence and precision.'}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate('/gallery');
            }}
            className="px-6 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-md hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            View Gallery →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
