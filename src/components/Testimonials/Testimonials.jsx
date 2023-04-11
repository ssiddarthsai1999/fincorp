import React from "react";
import "./Testimonials.css";
import man from "../../assets/man.jpg"
import man1 from "../../assets/man1.jpg"
import man2 from "../../assets/man2.jpg";
const Clients = () => {
   

    return (
        <section id="testimonials" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h1 className="text-center text-6xl font-bold">Testimonials</h1>
                <h1 className="text-center text-2xl my-6 text-[#535353] mb-[100px]">
                    What our clients say about us.
                </h1>
                <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                        <figure className="mt-10 flex flex-auto flex-col-reverse justify-between">
                            <blockquote className="text-lg leading-8 text-gray-900">
                                <p className="mt-10 text-xl">
                                    “Amet amet eget scelerisque tellus sit neque
                                    faucibus non eleifend. Integer eu praesent
                                    at a. Ornare arcu gravida natoque erat et
                                    cursus tortor consequat at. Vulputate
                                    gravida sociis enim nullam ultricies
                                    habitant malesuada lorem ac. Tincidunt urna
                                    dui pellentesque sagittis.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <img
                                    className="h-14 w-14 rounded-full bg-gray-50"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="text-base">
                                    <div className="font-bold text-gray-900 text-4xl">
                                        Judith Black{" "}
                                        <span className="text-[#5A5A5A] text-xl font-normal">
                                            ( CEO of Tuple)
                                        </span>
                                    </div>
                                    <div className="mt-1 text-gray-500"></div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                        <figure className="mt-10 flex flex-auto flex-col-reverse justify-between">
                            <blockquote className="text-lg leading-8 text-gray-900">
                                <p className="mb-10 text-xl">
                                    “Excepteur veniam labore ullamco eiusmod.
                                    Pariatur consequat proident duis dolore
                                    nulla veniam reprehenderit nisi officia
                                    voluptate incididunt exercitation
                                    exercitation elit. Nostrud veniam sint dolor
                                    nisi ullamco.”
                                </p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <img
                                    className="h-14 w-14 rounded-full bg-gray-50"
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <div className="text-base">
                                    <div className="font-bold text-gray-900 text-4xl ">
                                        Joseph Wick{" "}
                                        <span className="text-[#5A5A5A] text-xl font-normal">
                                            ( CEO of Reform)
                                        </span>
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
