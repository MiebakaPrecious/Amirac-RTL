interface GoogleMapProps {
  className?: string;
  height?: string;
}

const GoogleMap = ({ className = '', height = '450px' }: GoogleMapProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="rounded-lg overflow-hidden border border-border">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885.6305261869693!2d7.0842691696077384!3d4.837094783920233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd49b4a52e47%3A0x7097c06d8ea4325c!2sKM%202%20Ahoada%20East%20-%20West%20Rd%2C%20Umurolu%2C%20Elelenwa%20500212%2C%20Rivers!5e1!3m2!1sen!2sng!4v1769762201158!5m2!1sen!2sng"
          width="100%"
          height={height}
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="KM 2 Ahoada East - West Rd - Amirac Resources & Technologies Ltd"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default GoogleMap;
