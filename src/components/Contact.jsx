
const Contact = () => {
  return (
    <section id="contact" className="bg-[#161718] py-8">
      <div className="w-full sm:w-3/4 lg:w-2/3 mx-auto p-4 flex  flex-col lg:flex-row gap-6  items-center">
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.840981514909!2d78.63180497493548!3d17.419417383473164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f0049a87981%3A0xa004e68008395deb!2sThe%20Spice%20of%20Orugallu%20Telugu%20Kitchen!5e0!3m2!1sen!2sin!4v1760949212554!5m2!1sen!2sin" width="100%" style={{border: '0', aspectRatio: '1/1'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div
          id="contact"
          style={{
            backgroundImage: "url('./background/pattern1.png')",
          }}
          className="grid grow text-white p-8">

          <h1 className="text-4xl text-center pt-2 font-serif">
            Contact Us
          </h1>

          <div className="w-full lg:w-2/3 mx-auto">
            <p className="flex items-center justify-center gap-2 text-lg pt-6"> Phone</p>
            <p className="font-thin text-2xl text-[#e3b179] text-center tracking-widest">+91 89781 11072</p>
            <p className="flex items-center justify-center gap-2 text-lg pt-6"> Location</p>
            <p className="text-center text-zinc-300 font-thin">
              The Spice of Orugallu Telugu Kitchen, CJ9M+PPG, Divya Nagar, Narepally, Hyderabad, Telangana 500088
            </p>

            <p className="flex items-center justify-center gap-2 text-lg pt-6"> Email</p>
            <a href="mailto:TheSpiceOfOrugallu@gmail.com" className="block text-center text-zinc-300 font-thin">
              TheSpiceOfOrugallu@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
