import React from 'react';

import './BuildingDetails.css'; 

const About = () => {
  return (
    <div>

<div className="building-details">
      <h1 className="title">About the Building</h1>
      <h2 className="subtitle">🌟 Welcome to Our  Building 🌟</h2>
      <hr className="divider" />

      <section className="section">
        <h3 className="section-title">🏛️ Architectural Marvel</h3>
        <p className="section-content">
          Designed by the celebrated architect <strong>Jane Doe</strong>, our building epitomizes cutting-edge design and structural ingenuity. Its sleek lines and innovative use of space make it a modern masterpiece, standing tall as a beacon of architectural excellence.
        </p>
      </section>
      <hr className="divider" />

      <section className="section">
        <h3 className="section-title">🏢 State-of-the-Art Facilities</h3>
        <ul className="facilities-list">
          <li>💻 <strong>Smart Offices</strong>: Experience unparalleled productivity with our tech-equipped, ergonomic office spaces.</li>
          <li>🌱 <strong>Eco-Friendly Design</strong>: Sustainability is woven into our design, featuring energy-efficient systems and lush green spaces.</li>
          <li>🏋️ <strong>Luxurious Amenities</strong>: Indulge in our rooftop garden, state-of-the-art fitness center, and gourmet cafes.</li>
        </ul>
      </section>
      <hr className="divider" />

      <section className="section">
        <h3 className="section-title">📍 Prime Location</h3>
        <ul className="location-list">
          <li>🚇 <strong>Public Transportation</strong>: Steps away from major subway and bus lines for seamless commuting.</li>
          <li>🛍️ <strong>Dining and Shopping</strong>: A plethora of options to cater to every taste and style.</li>
          <li>🎭 <strong>Cultural Landmarks</strong>: Close to museums, theaters, and parks for your cultural and recreational enjoyment.</li>
        </ul>
      </section>
      <hr className="divider" />

      <section className="section">
        <h3 className="section-title">🔒 Safety and Security</h3>
        <ul className="security-list">
          <li>🕵️ <strong>24/7 Security</strong>: Our building is monitored around the clock, ensuring the safety and peace of mind of all occupants.</li>
          <li>🔥 <strong>Modern Fire Safety Systems</strong>: Outfitted with the latest fire detection and suppression technologies.</li>
        </ul>
      </section>
      <hr className="divider" />

      <section className="section">
        <h3 className="section-title">🌐 Community and Connectivity</h3>
        <p className="section-content">
          We believe in fostering a vibrant community among our tenants. Regular events, networking opportunities, and communal spaces are designed to encourage interaction and collaboration.
        </p>
      </section>
      <hr className="divider" />

      <section className="section">
        <h3 className="section-title">Experience Excellence</h3>
        <p className="section-content">
          Step inside and discover the perfect blend of luxury, functionality, and sustainability. Our building is not just a place to work or reside – it’s a lifestyle.
        </p>
      </section>
      <hr className="divider" />

      <section className="section">
        <h3 className="section-title">📞 Contact Us</h3>
        <p className="section-content">
          For more information or to schedule a tour, please reach out to our leasing office at <a href="mailto:email@example.com">email@example.com</a> or call us at (123) 456-7890.
        </p>
      </section>
    </div>

    </div>
  );
};

export default About;