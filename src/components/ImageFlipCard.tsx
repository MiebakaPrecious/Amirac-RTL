import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GalleryItem } from '@/contexts/GalleryContext';

interface ImageFlipCardProps {
  item: GalleryItem;
}

const ImageFlipCard = ({ item }: ImageFlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className="perspective-1000 h-64 md:h-72 lg:h-80 cursor-pointer group"
      onClick={() => navigate('/gallery')}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
          isFlipped ? 'rotate-x-180' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 backface-hidden rounded-lg overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={item.url}
            alt={item.filename}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Arrow button - triggers flip on hover */}
          <button
            className="absolute top-3 right-3 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(!isFlipped);
            }}
          >
            <ArrowUpRight className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-xs font-semibold text-primary bg-primary/20 px-2 py-1 rounded">
              {item.service_group}
            </span>
          </div>
        </div>
        
        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden rounded-lg overflow-hidden bg-primary rotate-x-180 p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}
        >
          <div>
            <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">
              {item.service_group}
            </h3>
            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              {item.description || 'Professional engineering services delivered with excellence and precision.'}
            </p>
          </div>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate('/gallery');
            }}
            className="self-start px-4 py-2 bg-background text-foreground rounded-md font-semibold text-sm hover:bg-background/90 transition-colors"
          >
            View Gallery →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageFlipCard;
