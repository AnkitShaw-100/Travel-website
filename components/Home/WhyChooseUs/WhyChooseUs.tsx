import React from "react";
import {
  FaRegThumbsUp,
  FaHeadset,
  FaWallet,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRegThumbsUp className="text-white text-3xl" />,
    title: "Trusted & Verified",
    description:
      "Every property and hotel listed is handpicked and vetted to meet our quality standards. You can book with confidence knowing we've done the hard work for you.",
    benefit: "100% verified listings for peace of mind",
    color: "from-blue-600 to-blue-400",
    textColor: "text-blue-600",
  },
  {
    icon: <FaHeadset className="text-white text-3xl" />,
    title: "24/7 Customer Support",
    description:
      "Whether it's a midnight question or a last-minute change, our support team is available round-the-clock to help you with quick and friendly service.",
    benefit: "Always-on assistance, day or night",
    color: "from-purple-600 to-purple-400",
    textColor: "text-purple-600",
  },
  {
    icon: <FaWallet className="text-white text-3xl" />,
    title: "Affordable Luxury",
    description:
      "We work directly with property owners to secure the best deals. That means top-tier experiences at prices that suit your budget.",
    benefit: "Exclusive deals and no hidden charges",
    color: "from-green-600 to-green-400",
    textColor: "text-green-600",
  },
  {
    icon: <FaShieldAlt className="text-white text-3xl" />,
    title: "Secure Payments",
    description:
      "All your transactions are encrypted and processed with trusted gateways to ensure your data stays safe and secure.",
    benefit: "Protected by advanced encryption",
    color: "from-amber-600 to-amber-400",
    textColor: "text-amber-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Your satisfaction and safety are our top priorities. Here what makes us stand out from the rest.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col items-start text-left overflow-hidden"
            >
              {/* Hover background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`} />

              {/* Icon container */}
              <div className={`bg-gradient-to-br ${feature.color} rounded-xl p-4 mb-6 shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm font-medium text-gray-500 mb-3">
                {feature.benefit}
              </p>
              <p className="text-gray-600 mb-5 flex-grow">{feature.description}</p>

              <a
                href="#"
                className={`mt-auto text-sm font-medium flex items-center group-hover:${feature.textColor} transition-colors duration-300`}
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
