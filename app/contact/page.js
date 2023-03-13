"use client";
const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-gray-700 p-10 mx-10">
      <div>
        <h1 className="text-center">Contact Us</h1>
        <div>
          <p>
            We would love to hear from you! Whether you have a question about
            our tours, need help planning your itinerary, or just want to say
            hello, we're here to assist you.
          </p>
          <p>
            Our team is available to answer your queries and provide you with
            any information you need. We typically respond to all inquiries
            within 24 hours, although it may take longer during peak travel
            seasons.
          </p>
          <p>
            If you're planning a trip to Myanmar and would like to discuss your
            itinerary in detail, we can schedule a phone or video call at a time
            that is convenient for you.
          </p>
          <p>
            In addition, we welcome feedback from our customers, as it helps us
            improve our services and ensure that we meet your expectations. If
            you have any comments or suggestions, please don't hesitate to reach
            out to us.
          </p>
          <p>
            Thank you for considering Amrtago. for your travel needs. We look
            forward to hearing from you and helping you plan your dream trip to
            Myanmar.
          </p>
          <p>
            I hope this helps you in creating an informative and user-friendly
            "Contact Us" page for your website. Please feel free to modify the
            text as per your preferences and requirements. Good luck!
          </p>
        </div>
      </div>
      <div>
        <div className="w-full md:w-96 md:max-w-full mx-auto h-full pt-10">
          <div className="p-6 border border-gray-300 sm:rounded-md">
            <form method="POST" action="https://amrtago.com/start">
              <label className="block mb-6">
                <span className="text-gray-700">Your name</span>
                <input
                  type="text"
                  name="name"
                  class="
                    block
                    w-full
                    mt-1
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                  placeholder="Tun Aung"
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="youremail@example.com"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-700">Message</span>
                <textarea
                  name="message"
                  className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  rows="3"
                  placeholder="Tell us what you're thinking about..."
                ></textarea>
              </label>
              <div className="mb-6">
                <button
                  type="submit"
                  className="
            py-3
            px-5
            text-indigo-100
            bg-orange-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-orange-800
          "
                >
                  Contact Us
                </button>
              </div>
              <div>
                <div className="mt-2 text-gray-700 text-right text-xs">
                  by
                  <a
                    href="https://amrtago.com"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Amrtago
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
