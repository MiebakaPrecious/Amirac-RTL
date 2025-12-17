import { contactInfo } from '@/utils/contactInfo';

interface GoogleMapProps {
  className?: string;
  height?: string;
}

// Business name for the marker label
const BUSINESS_NAME = 'Amirac Resources & Technologies Ltd';

// Encode the address for the Google Maps embed URL with marker
const getMapEmbedUrl = () => {
  const encodedAddress = encodeURIComponent(contactInfo.address);
  const encodedName = encodeURIComponent(BUSINESS_NAME);
  // Using place mode with query to show marker with label
  return `https://www.google.com/maps?q=${encodedName},${encodedAddress}&output=embed`;
};

// Get the link for viewing larger map and getting directions
const getMapLink = () => {
  const encodedAddress = encodeURIComponent(contactInfo.address);
  const encodedName = encodeURIComponent(BUSINESS_NAME);
  return `https://www.google.com/maps/search/?api=1&query=${encodedName},${encodedAddress}`;
};

const GoogleMap = ({ className = '', height = '400px' }: GoogleMapProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="rounded-lg overflow-hidden border border-border">
        <iframe
          src={getMapEmbedUrl()}
          width="100%"
          height={height}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${BUSINESS_NAME} Location`}
          className="w-full"
        />
      </div>
      <div className="mt-3 text-center">
        <a
          href={getMapLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:text-primary/80 underline transition-colors"
        >
          View larger map & get directions →
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
