import img1 from "@/assets/asset 112.png"
import img2 from "@/assets/asset 114.png"
import img3 from "@/assets/asset 115.png"
import img4 from "@/assets/asset 116.png"
import img5 from "@/assets/asset 117.png"
import img6 from "@/assets/asset 118.png"
import img7 from "@/assets/asset 119.png"
import img8 from "@/assets/asset 120.png"

export default function AwardsSection() {
  const awards = [
    {
      name: "G2 Five Star Rating",
      logo: img1,
      alt: "G2 Five Star Rating Certificate"
    },
    {
      name: "Bastil",
      logo: img2,
      alt: "Bastil Professional Certification"
    },
    {
      name: "Boleir",
      logo: img3,
      alt: "Boleir Certification"
    },
    {
      name: "Dig IT",
      logo: img4,
      alt: "Dig IT Award"
    },
    {
      name: "Darkside",
      logo: img5,
      alt: "Darkside Studios Recognition"
    },
    {
      name: "Fifthflour",
      logo: img6,
      alt: "Fifthflour Certification"
    },
    {
      name: "Modal",
      logo: img7,
      alt: "Modal Partnership Certificate"
    },
    {
      name: "Madrin",
      logo: img8,
      alt: "Madrin Professional Recognition"
    }
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Recent Awards & Certifications
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {awards.map((award) => (
            <div
              key={award.name}
              className="flex items-center justify-center p-4 bg-white rounded-lg transition-transform hover:scale-105 hover:bg-black"
            >
              <img
                src={award.logo}
                alt={award.alt}
                width={200}
                height={80}
                className="max-w-[150px] h-auto object-contain filter   transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

