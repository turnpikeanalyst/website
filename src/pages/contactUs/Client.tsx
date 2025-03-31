import { clientImg, clientlogo1, clientlogo3, clientlogo6, clientlogo7 } from "@/assets";





const Client = () => {



  const logos = [
    { src: clientlogo1, alt: "alignent" },
    { src: clientlogo7, alt: "telekom" },
    { src: clientlogo6, alt: "infirior" },
    { src: clientlogo3, alt: "ABB" },
  ];

  return (
    <div className="mt-20 pt-10 ">
     <div className=" flex justify-center items-center h-96 relative " >
          <img
            src={clientImg}
            alt="hero"
            className="  aspect-video h-full absolute "
          />
          <p className=" text-lg text-center font-semibold uppercase tracking-wider ">
           <span className="text-6xl"> Turnpikeanalyst</span> <br />
           <span className="text-pink-500">  Our Clients & partners</span>
          </p>
        </div>

      <div>
        <p className="text-3xl font-semibold uppercase  text-pink-400 flex justify-center items-center p-5 tracking-wider">
        technology & communication
        </p>
      </div> 


      <div className="flex flex-wrap justify-center items-center gap-6 bg-white p-8 rounded-lg shadow-lg w-[80%] max-w-4xl mx-auto">
      {logos.map((logo, index) => (
        <div key={index} className="flex items-center justify-center bg-gray-50 p-6 rounded-md w-1/2">
          <img src={logo.src} alt={logo.alt} className="h-16" />
        </div>
      ))}
    </div>
    </div>
  )
}

export default Client
