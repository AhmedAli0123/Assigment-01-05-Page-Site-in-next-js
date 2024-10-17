
export default function Contact(){
    return(
        <div>
            <section className="h-svh bg-violet-900">
             <div className="container mx-auto p-5">
      <div className="contact-card max-w-md mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <form>
          <div className="form-group mb-5">
            <label htmlFor="name" className="block text-sm text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-3 bg-gray-200 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div className="form-group mb-5">
            <label htmlFor="email" className="block text-sm text-gray-700 mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-200 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div className="form-group mb-5">
            <label htmlFor="message" className="block text-sm text-gray-700 mb-2">Your Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Enter your message"
              className="w-full p-3 bg-gray-200 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-800 text-gray-800 py-3 rounded-md hover:bg-pink-500 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
            </section>
        </div>
    )
}