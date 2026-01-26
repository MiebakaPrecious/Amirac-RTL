interface GoogleMapProps {
  className?: string;
  height?: string;
}

const GoogleMap = ({ className = '', height = '450px' }: GoogleMapProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="rounded-lg overflow-hidden border border-border">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.47500312796708!2d7.082627968053442!3d4.838530800000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd48885845b9%3A0xe3530f36d1ff3215!2sR3QM%2BC53%2C%20Expressway%2C%20Elelenwo%2C%20Eleme%20501101%2C%20Rivers!5e0!3m2!1sen!2sng!4v1765988871355!5m2!1sen!2sng" 
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
