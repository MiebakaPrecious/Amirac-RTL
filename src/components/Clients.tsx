const clients = [
  { name: "Client 1", logo: "https://via.placeholder.com/150x50/e5e5e5/666666?text=CLIENT" },
  { name: "Client 2", logo: "https://via.placeholder.com/150x50/e5e5e5/666666?text=BRAND" },
  { name: "Client 3", logo: "https://via.placeholder.com/150x50/e5e5e5/666666?text=COMPANY" },
  { name: "Client 4", logo: "https://via.placeholder.com/150x50/e5e5e5/666666?text=PARTNER" },
  { name: "Client 5", logo: "https://via.placeholder.com/150x50/e5e5e5/666666?text=CORP" },
];

const Clients = () => {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
