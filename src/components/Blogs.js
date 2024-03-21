import React from "react";
import { useSelector } from "react-redux";

export default function Blogs() {
  const data = useSelector((state) => state.api.datas);
  const socialhandles = data?.user?.social_handles;

  return (
    <section className="py-16 bg-gray-100 dark:bg-slate-800" id="blog">
      <div className="container">
        <div className="pb-8 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl font-semibold text-gray-800 dark:text-gray-200">Explore My Social Handles</h3>
          <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300 text-lg">Stay connected with me on various platforms. Follow me for the latest updates and insights.</p>
        </div>

        {/* Render social handles */}
        <div className="flex justify-center items-center gap-8">
          {socialhandles &&
            socialhandles.map((handle, index) => (
              <a
                key={index}
                href={handle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <img
                  src={handle.image.url}
                  alt={handle.platform}
                  className="w-12 h-12 object-contain"
                />
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
