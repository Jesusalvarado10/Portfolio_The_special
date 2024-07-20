// src/app/projects/[id]/page.tsx
'use client';
import { data } from '@/app/assets/conts';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { LoadingSpinner } from '@/app/assets/loading';

interface Project {
  id: string;
  name: string;
  img: StaticImageData;
  description_short: string;
  descrition_long: string;
  url: string;
  link?: string | null;
}

const ProjectId = () => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const id = pathname.split('/')[2];

  useEffect(() => {
    setLoading(true);
    if (id) {
      const foundProject = data.find((p) => p.id === id);
      if (foundProject) {
        setProject(foundProject as unknown as Project);
        console.log(foundProject);
      }
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!project) {
    return <div className="text-center text-white">Project not found</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 relative">
      <Link 
        href={'/'}
        className="absolute top-4 left-4 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
      >
        ← Back
      </Link>
      <div className="bg-black text-white p-8 rounded-lg shadow-2xl max-w-3xl w-full mx-4">
        <h1 className="text-4xl font-bold mb-6 text-center">{project.name}</h1>

        <div className="mb-8">
          <Image
            src={project.img ?? '/path/to/default/image.jpg'}
            alt={project.name ?? ''}
            width={800}
            height={400}
            layout="responsive"
            className="rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-3">Short Description</h2>
        <p className="mb-6 text-gray-300 leading-relaxed">{project.description_short}</p>

        <h2 className="text-2xl font-semibold mb-3">Detailed Description</h2>
        <p className="mb-8 text-gray-300 leading-relaxed">{project.descrition_long}</p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            target="_blank"
            href={project.url}
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-center flex items-center justify-center"
          >
            <FaGithub className="mr-2 text-xl" />
            View on GitHub
          </Link>
          {project.link && (
            <Link 
              target="_blank"
              href={project.link}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-center"
            >
              Visit Website
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectId;