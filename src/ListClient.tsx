const ListClientImage = () => {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div
        style={{
          display: "flex",
          padding: "1rem",
          justifyContent: "space-between",
          color: "#ffffff",
          background: "#B22D1C",
        }}
      >
        <p style={{ fontSize: "1rem", lineHeight: "1.5rem", fontWeight: 700 }}>
          Our Clients
        </p>
        <a
          href="https://theinfluence.ai/work/"
          target="_blank"
          style={{ fontSize: "0.875rem", lineHeight: "1.25rem" }}
          rel="noreferrer"
        >
          See All
        </a>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <img
            style={{ width: "50%" }}
            src={
              "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
            }
            alt="client-1"
          />
          <img
            style={{ width: "50%" }}
            src={
              "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
            }
            alt="client-2"
          />
        </div>
        <div style={{ display: "flex" }}>
          <img
            style={{ width: "60%" }}
            src={
              "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
            }
            alt="client-3"
          />
          <img
            style={{ aspectRatio: "1 / 1", width: "40%" }}
            src={
              "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
            }
            alt="client-4"
          />
        </div>
        <div style={{ display: "flex" }}>
          <img
            style={{ width: "50%" }}
            src={
              "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
            }
            alt="client-5"
          />
          <img
            style={{ width: "50%" }}
            src={
              "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg"
            }
            alt="client-6"
          />
        </div>
      </div>
    </div>
  );
};

export default ListClientImage;
