import { Beaker, Code2, LineChart, Scale, Search, Users2 } from 'lucide-react'

export default function SpecialSevices() {
  const services = [
    {
      title: "Business Consultancy",
      description: "Business is the activity of making one living making money by producing products.Simply put it is any activity or enterprise entered into for profit.",
      icon: <Users2 className="w-6 h-6 text-yellow-500" />,
      bgColor: "bg-yellow-50",
    },
    {
      title: "Business Management",
      description: "Business is the activity of making one living making money by producing products.Simply put it is any activity or enterprise entered into for profit.",
      icon: <LineChart className="w-6 h-6 text-green-500" />,
      bgColor: "bg-green-50",
    },
    {
      title: "Business Development",
      description: "Business is the activity of making one living making money by producing products.Simply put it is any activity or enterprise entered into for profit.",
      icon: <Code2 className="w-6 h-6 text-purple-500" />,
      bgColor: "bg-purple-50",
    },
    {
      title: "Marketing",
      description: "Business is the activity of making one living making money by producing products.Simply put it is any activity or enterprise entered into for profit.",
      icon: <Scale className="w-6 h-6 text-pink-500" />,
      bgColor: "bg-pink-50",
    },
    {
      title: "SEO Services",
      description: "Business is the activity of making one living making money by producing products.Simply put it is any activity or enterprise entered into for profit.",
      icon: <Search className="w-6 h-6 text-orange-500" />,
      bgColor: "bg-orange-50",
    },
    {
      title: "Usability Testing",
      description: "Business is the activity of making one living making money by producing products.Simply put it is any activity or enterprise entered into for profit.",
      icon: <Beaker className="w-6 h-6 text-blue-500" />,
      bgColor: "bg-blue-50",
    },
  ]

  return (
    <section className=" py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl  font-normal mb-4 text-[#1e1b4b]">Our special services</h2>
          <p className="text-[#64748b] max-w-3xl mx-auto font-medium">
            Business is the activity of making one living or making money by producing or buying and selling products.
            Simply put it is any activity or enterprise entered into for profit.
          </p>
        </div>

        <div className="flex flex-wrap justify-between gap-6">
          
           {services.map((items)=>(
            <div className="flex items-start bg-white shadow-lg rounded-lg p-4 w-full md:w-[48%]" >
              <div className='flex items-center justify-center w-12 h-12 rounded-full m-5'>
                {items.icon}

              </div>
              <div>
                <h3 className='text-lg font-semibold'>{items.title}</h3>
                <p className='text-gray-600 text-sm'>{items.description}</p>

              </div>


            </div>


           ))}



          



        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className={`${service.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-normal mb-3 text-[#1e1b4b]">{service.title}</h3>
                <p className="text-[#64748b] text-sm font-medium">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* <div className="text-center mt-12">
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
            See Our All Services →
          </Button>
        </div> */}
      </div>
    </section>
  )
}

