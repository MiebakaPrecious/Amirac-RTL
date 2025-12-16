import { contactInfo } from '@/utils/contactInfo';

interface GoogleMapProps {
  className?: string;
  height?: string;
}

// Encode the address for the Google Maps embed URL
const getMapEmbedUrl = () => {
  const encodedAddress = encodeURIComponent(contactInfo.address);
  return `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
};

const GoogleMap = ({ className = '', height = '400px' }: GoogleMapProps) => {
  return (
    <div className={`w-full rounded-lg overflow-hidden border border-border ${className}`}>
      <iframe
        src={getMapEmbedUrl()}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Amirac Resources & Technologies Location"
        className="w-full"
      />
    </div>
  );
};

export default GoogleMap;
