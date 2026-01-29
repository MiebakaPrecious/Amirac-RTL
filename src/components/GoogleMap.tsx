interface GoogleMapProps {
  className?: string;
  height?: string;
}

const GoogleMap = ({ className = '', height = '450px' }: GoogleMapProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="rounded-lg overflow-hidden border border-border">
        <iframe 
          src="https://maps.google.com/maps?q=4.8374187,7.0842838&z=17&hl=en&output=embed" 
          width="100%"
          height={height}
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Amirac Resources & Technologies Ltd Location"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default GoogleMap;
