// import React, { useState, useEffect } from "react";
// import image from "../assets/image.png";
// import Card from './Card';
// import EventCard from './EventCard';

// const Header = () => {
//   const [scrolling, setScrolling] = useState(false);

//   const handleScroll = () => {
//     // Change scrolling state based on scroll position
//     setScrolling(window.scrollY > 100);
//   };

//   useEffect(() => {
//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       // Cleanup on unmount
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black to-orange-900 flex flex-col items-center justify-center relative">
//       {/* Vector Background */}
//       <div>
//         {/* First Layer */}
//         <div
//           className="absolute filter blur-3xl"
//           style={{
//             position: "absolute",
//             width: "1673.07px",
//             height: "200px",
//             left: "56.73px",
//             top: "527px",
//             background: "rgba(166, 133, 109, 0.3)",
//             borderRadius: "829.604px",
//           }}
//         ></div>

//         {/* Second Layer with smoother transition */}
//         <div
//           className="absolute filter blur-3xl transition-all duration-500"
//           style={{
//             width: "1673px",
//             height: scrolling ? "400px" : "258px", // Increase height based on scrolling
//             left: "78.71px",
//             top: "710.01px",
//             background:
//               "linear-gradient(to bottom right, rgba(255, 255, 255, 1) 0%, rgba(240, 120, 50, 1) 50%, rgba(255, 255, 255, 1) 100%)", // Adjusted gradient stops for smooth transition
//           }}
//         ></div>
//       </div>

//       {/* Navbar */}
//       <nav className="absolute top-0 w-full flex justify-between items-center p-6 text-white">
//         <div className="flex items-center">
//           <div className="text-lg" style={{ fontWeight: "500", fontSize: "16px" }}>
//             What we believe
//           </div>
//           <div className="text-lg ml-8" style={{ fontWeight: "500", fontSize: "16px" }}>
//             Our features
//           </div>
//         </div>

//         <div className=" mr-7 flex items-center">
//           <div className="text-lg" style={{ fontWeight: "500", fontSize: "16px" }}>
//             Our story
//           </div>
//           <div className="text-lg ml-8" style={{ fontWeight: "500", fontSize: "16px" }}>
//             The waitlist
//           </div>
//         </div>
//       </nav>

//       {/* Centered Logo, Text, and Button Section */}
//       <div className="flex flex-col items-center">
//         <img
//           src={image}
//           alt="Description"
//           style={{
//             width: scrolling ? "170px" : "840.64px", // Shrink size based on scrolling
//             height: scrolling ? "36.33px" : "auto", // Maintain aspect ratio
//             position: "absolute",
//             top: scrolling ? "310px" : "394px", // Move up on scroll
//             transition: "all 0.3s ease", // Smooth transition
//             opacity: scrolling ? "1" : "1", // Keep opacity constant for now
//           }}
//         />

//         {/* Text and Button Section */}
//         <div
//           className={`flex flex-col items-center transition-all duration-500 ${
//             scrolling ? "opacity-0" : "opacity-100"
//           }`}
//           style={{
//             width: "668px",
//             position: "absolute",
//             top: scrolling ? "403.15px" : "450px", // Move down slightly
//             textAlign: "center",
//             opacity: scrolling ? "1" : "0", // Fade out when scrolling
//           }}
//         >
//           <h2
//             className="text-white mb-2"
//             style={{
//               fontFamily: "SF Pro Display",
//               fontSize: "75px",
//               fontWeight: "400",
//               lineHeight: "88px",
//               letterSpacing: "-0.02em",
//             }}
//           >
//             Unlock Seamless Efficiency
//           </h2>
//           <div className="flex flex-wrap justify-center space-x-4">
//         <Card title="Clap Dubai" rating="4.4" price="$$$$" cuisine="Japanese" />
//         <Card title="Restaurant Le Bous" rating="4.5" price="$$$" cuisine="French" />
//         <EventCard title="Kite Beach" time="10:00 - 14:00" />
//       </div>
//           <button
//             className="bg-white text-black py-2 px-4 rounded-full shadow-lg"
//             style={{
//               width: "167px",
//               height: "52px",
//               borderRadius: "52px", // Rounded corners
//               opacity: scrolling ? "1" : "0", // Fade out when scrolling
//             }}
//           >
//             Join Waitlist
//           </button>
//         </div>
//       </div>

//       {/* Scroll down indicator */}
//       <div
//         className="absolute flex flex-col items-center"
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           position: "absolute",
//           width: "89px",
//           height: "66px",
//           left: "calc(50% - 89px / 2)",
//           bottom: "40px", // Position 40px from the bottom
//           gap: "8px",
//         }}
//       >
//         <div className="border border-white w-5 h-10 rounded-full flex items-center justify-center">
//           <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
//         </div>
//         <div className="text-white">Scroll down</div>
//       </div>
//     </div>
//   );
// };

// export default Header;
import React, { useState, useEffect,useRef } from "react";
import image from "../assets/image.png";
import Card from './Card';
import EventCard from './EventCard';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [cardPositions, setCardPositions] = useState({
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false,
  });
  const cardRefs = {
    topLeft: useRef(null),
    topRight: useRef(null),
    bottomLeft: useRef(null),
    bottomRight: useRef(null),
  };
  const handleScroll = () => {
    // Change scrolling state based on scroll position
    setScrolling(window.scrollY > 100);

    // Show cards when scrolling past a certain threshold
    if (window.scrollY > 300) {
      setCardsVisible(true);
      // Set card positions based on scrolling direction
      if (window.scrollY > 500) {
        setCardPositions({
          topLeft: true,
          topRight: true,
          bottomLeft: true,
          bottomRight: true,
        });
      } else {
        setCardPositions({
          topLeft: false,
          topRight: true,
          bottomLeft: true,
          bottomRight: false,
        });
      }
    } else {
      setCardsVisible(false);
      setCardPositions({
        topLeft: false,
        topRight: false,
        bottomLeft: false,
        bottomRight: false,
      });
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup on unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (cardsVisible) {
      // Animate cards when they become visible
      cardRefs.topLeft.current.classList.add("animate-slide-in-from-top-left");
      cardRefs.topRight.current.classList.add("animate-slide-in-from-top-right");
      cardRefs.bottomLeft.current.classList.add("animate-slide-in-from-bottom-left");
      cardRefs.bottomRight.current.classList.add("animate-slide-in-from-bottom-right");
    }
  }, [cardsVisible]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-orange-900 flex flex-col items-center justify-center relative">
      {/* Vector Background */}
      <div>
        {/* First Layer */}
        <div
          className="absolute filter blur-3xl"
          style={{
            position: "absolute",
            width: "1673.07px",
            height: "200px",
            left: "56.73px",
            top: "527px",
            background: "rgba(166, 133, 109, 0.3)",
            borderRadius: "829.604px",
          }}
        ></div>

        {/* Second Layer with smoother transition */}
        <div
          className="absolute filter blur-3xl transition-all duration-500"
          style={{
            width: "1673px",
            height: scrolling ? "400px" : "258px", // Increase height based on scrolling
            left: "78.71px",
            top: "710.01px",
            background:
              "linear-gradient(to bottom right, rgba(255, 255, 255, 1) 0%, rgba(240, 120, 50, 1) 50%, rgba(255, 255, 255, 1) 100%)", // Adjusted gradient stops for smooth transition
          }}
        ></div>
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 w-full flex justify-between items-center p-6 text-white">
        <div className="flex items-center">
          <div className="text-lg" style={{ fontWeight: "500", fontSize: "16px" }}>
            What we believe
          </div>
          <div className="text-lg ml-8" style={{ fontWeight: "500", fontSize: "16px" }}>
            Our features
          </div>
        </div>

        <div className=" mr-7 flex items-center">
          <div className="text-lg" style={{ fontWeight: "500", fontSize: "16px" }}>
            Our story
          </div>
          <div className="text-lg ml-8" style={{ fontWeight: "500", fontSize: "16px" }}>
            The waitlist
          </div>
        </div>
      </nav>

      {/* Centered Logo, Text, and Button Section */}
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt="Description"
          style={{
            width: scrolling ? "170px" : "840.64px", // Shrink size based on scrolling
            height: scrolling ? "36.33px" : "auto", // Maintain aspect ratio
            position: "absolute",
            top: scrolling ? "310px" : "394px", // Move up on scroll
            transition: "all 0.3s ease", // Smooth transition
            opacity: scrolling ? "1" : "1", // Keep opacity constant for now
          }}
        />

        {/* Text and Button Section */}
        <div
          className={`flex flex-col items-center transition-all duration-500 ${
            scrolling ? "opacity-0" : "opacity-100"
          }`}
          style={{
            width: "668px",
            position: "absolute",
            top: scrolling ? "403.15px" : "450px", // Move down slightly
            textAlign: "center",
            opacity: scrolling ? "1" : "0", // Fade out when scrolling
          }}
        >
          <h2
            className="text-white mb-2"
            style={{
              fontFamily: "SF Pro Display",
              fontSize: "75px",
              fontWeight: "400",
              lineHeight: "88px",
              letterSpacing: "-0.02em",
            }}
          >
            Unlock Seamless Efficiency
          </h2>
          <div className="flex flex-wrap justify-center space-x-4">
            {cardsVisible && (
              <>
                <Card
                  title="Kite Beach"
                  time="10:00 - 14:00"
                  position={cardPositions.bottomLeft ? "bottom-0 left-0" : "hidden"}
                  ref={cardRefs.bottomLeft}
                />
                <Card
                  title="Other Event"
                  time="15:00 - 18:00"
                  position={cardPositions.bottomRight ? "bottom-0 right-0" : "hidden"}
                  ref={cardRefs.bottomRight}
                />
                <Card
                  title="Kite Beach"
                  time="10:00 - 14:00"
                  position={cardPositions.bottomLeft ? "bottom-0 left-0" : "hidden"}
                  ref={cardRefs.bottomLeft}
                />
                <Card
                  title="Other Event"
                  time="15:00 - 18:00"
                  position={cardPositions.bottomRight ? "bottom-0 right-0" : "hidden"}
                  ref={cardRefs.bottomRight}
                />
              </>
            )}
          </div>
          <button
            className="bg-white text-black py-2 px-4 rounded-full shadow-lg"
            style={{
              width: "167px",
              height: "52px",
              borderRadius: "52px", // Rounded corners
              opacity: scrolling ? "1" : "0", // Fade out when scrolling
            }}
          >
            Join Waitlist
          </button>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          width: "89px",
          height: "66px",
          left: "calc(50% - 89px / 2)",
          bottom: "40px", // Position 40px from the bottom
          gap: "8px",
        }}
      >
        <div className="border border-white w-5 h-10 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
        <div className="text-white">Scroll down</div>
      </div>
    </div>
  );
};

export default Header;