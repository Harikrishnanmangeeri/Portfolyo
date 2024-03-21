import React, { useState } from "react";
import { Link as Link2 } from "react-router-dom";
import * as Unicons from '@iconscout/react-unicons';
import Lightbox from 'react-18-image-lightbox';
import '../../node_modules/react-18-image-lightbox/style.css';
import { useSelector } from "react-redux";

export default function Projects() {
    const [photoIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const data = useSelector((state) => state.api.datas);
    const projects = data?.user?.projects;

    const handleClick = (index) => {
        setActiveIndex(index);
        setOpen(true);
    }

    return (
        <>
            <section className="relative md:py-24 py-16" id="project">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">My Work & Projects</h3>
                        <p className="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of development.</p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                        {projects?.map((item, index) => (
                            <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800" key={index}>
                                <img src={item.image.url} alt="" />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
                                <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
                                    <Link2 to="#!" className="text-white hover:text-amber-500 font-semibold transition-all duration-500">{item.techStack}</Link2>
                                    <span className="block text-sm text-slate-400">{item.title}</span>
                                </div>

                                <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
                                    <Link2 to="#" onClick={() => handleClick(index)} className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"><Unicons.UilCamera width={16} /></Link2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {isOpen && (
                <Lightbox
                    mainSrc={projects[photoIndex].image.url}
                    nextSrc={projects[(photoIndex + 1) % projects.length].image.url}
                    prevSrc={projects[(photoIndex + projects.length - 1) % projects.length].image.url}
                    onCloseRequest={() => setOpen(false)}
                    onMovePrevRequest={() => setActiveIndex((photoIndex + projects.length - 1) % projects.length)}
                    onMoveNextRequest={() => setActiveIndex((photoIndex + 1) % projects.length)}
                />
            )}
        </>
    )
}
