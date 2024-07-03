import React, { useState } from "react";

const styles = {
  imageContainer: {
    width: "150px",
    overflow: "hidden", // Ensures the image doesn't overflow the container
    backgroundColor: "#f8f9fa", // Default background color
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Default box shadow
  },
  imageContainerHover: {
    backgroundColor: "#007bff", // Background color on hover
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Box shadow on hover
  },
  image: {
    transition: "transform 0.3s ease",
  },
  imageHover: {
    transform: "scale(1.1)",
    
  },
  title: {
    transition: "color 0.3s ease",
    color: "#343a40", // Default color
  },
  titleHover: {
    color: "#007bff", // Color on hover
  },
};

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <section id="features" className="py-5 bg-white ftco-faqs">
        <div className="container">
          <div className="mx-auto w-75 mb-5">
            <h1 className="text-center">
              Simple solution for assisted E-Filing of ITR
            </h1>
            <p className="text-center mt-3">
              These Terms & Conditions govern your use of TORATAX website and
              services. By accessing or using our website or services, you agree
              to abide by the listed policy and terms & conditions
            </p>
          </div>
          <div className="mx-auto" style={{ width: "70%" }}>
            <div className="row">
              {[
                { src: "images/expert.jpg", alt: "Expert Assistance", title: "Expert Assistance" },
                { src: "images/Cost&Time.jpg", alt: "Save Time & Cost", title: "Save Time & Cost" },
                { src: "images/UserFriendly.jpg", alt: "User Friendly", title: "User Friendly" },
                { src: "images/Secure&Reliable.jpg", alt: "Secure & Reliable", title: "Secure & Reliable" },
              ].map((item, index) => (
                <div key={index} className="col-12 col-sm-6 d-flex flex-column align-items-center mb-4">
                  <div
                    className="our-team"
                    style={
                      hoveredIndex === index
                        ? { ...styles.imageContainer,...styles.imageHover, ...styles.imageContainerHover }
                        : styles.imageContainer
                    }
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      style={
                        hoveredIndex === index
                          ? { ...styles.image,}
                          : styles.image
                      }
                    />
                  </div>
                  <h3
                    className="title mt-4"
                    style={
                      hoveredIndex === index
                        ? { ...styles.title, ...styles.titleHover }
                        : styles.title
                    }
                  >
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
