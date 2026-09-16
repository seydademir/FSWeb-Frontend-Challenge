import React from 'react';
import { useSite } from '../context/SiteContext';
import axios from 'axios';
import { toast } from 'react-toastify';

export function Projects() {
  const { content, lang } = useSite();

  const handleProjectClick = (projectTitle) => {
    axios
      .post('https://reqres.in/api/workintech', { project: projectTitle })
      .then(() => {
        toast.success(
          lang === 'tr'
            ? `${projectTitle} bilgisi API'ye gönderildi!`
            : `${projectTitle} sent to API successfully!`,
          { position: 'bottom-right' }
        );
      })
      .catch(() => {
        toast.error(
          lang === 'tr' ? 'API isteğinde bir hata oluştu.' : 'API request failed.',
          { position: 'bottom-right' }
        );
      });
  };

  return (
    <section className="py-16 px-4 md:px-16 max-w-5xl mx-auto border-t border-slate-200 dark:border-slate-800">
      <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-slate-100 mb-12">
        {content.projects.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {content.projects.list.map((project) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project.title)}
            className={`p-8 rounded-3xl ${project.bgColor} shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between overflow-hidden relative`}
          >
            <div>
              <h3 className="font-serif text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                {project.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-xs mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 text-xs font-serif font-semibold rounded-full bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-sm font-bold text-slate-900 dark:text-slate-100 mb-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:underline"
                >
                  View on Github
                </a>
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:underline flex items-center gap-1"
                >
                  Go to app -&gt;
                </a>
              </div>
              <div className="rounded-t-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}