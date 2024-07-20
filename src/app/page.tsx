import Image from "next/image";
import photo from "./img/photo.jpg";
import {data} from "./assets/conts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-900 text-white">
    <div className="container mx-auto px-4 py-12 mt-32">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-20">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="text-4xl font-bold">Jesús Alvarado</h1>
          <p className="text-lg leading-relaxed">
            Soy un desarrollador de software con experiencia en React, TypeScript, Node.js, Express, y Firebase. 
            Mi versatilidad en frontend y backend me permite crear soluciones completas y eficientes. 
            Explora mi portafolio para ver ejemplos de aplicaciones robustas y escalables que he desarrollado.
          </p>
        </div>
        <div className="lg:w-1/3">
          <Image
            src={photo}
            alt="Jesús Alvarado"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
  
      <div className="bg-black mt-56 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-12 text-center">List of Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-white/20">
              <Image src={project.img} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description_short}</p>
                <Link href={`/projects/${project.id}`} className="text-blue-400 hover:text-blue-200 transition-colors duration-200">
                  Learn More
                </Link>     
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </main>
  );
}