import MySelf from '../../images/profile/MySelf.png';
function Home() {
    return (
        <section id="home" className="py-8 px-12">
            <div className="container">
                <div className="flex flex-wrap">
                    {/* Start Cta Profile */}
                    <div className="w-full self-center lg:w-1/2 px-2 py-5">
                        <h1 className="text-3xl font-semibold text-dark dark:text-light">I'am Web Developer</h1>
                        <h3 className="text-3xl font-semibold text-dark dark:text-light">Wayan Berdyanto</h3>
                        <p className="mt-4 mb-6 leading-6 font-normal tracking-wider text-dark text-lg dark:text-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam itaque id alias in quasi autem cumque aperiam eos dolore, aut, ipsa est praesentium? Hic.</p>
                        <a href="" className="mt-4 border-[1px] rounded-md   border-primary text-primary font-medium px-6 py-3 text-lg duration-500 hover:bg-primary hover:text-light">Tentang Saya</a>
                    </div>
                    {/* End Cta Profile */}
                    {/* Start Blob Maker Image */}
                    <div className="w-full self-center lg:w-1/2 px-5">
                        <div className="relative lg:mt-9 lg:-right-20">
                            <img src={MySelf} alt="Gambar Error" height={350} width={400} className="max-w-full mex-auto" />
                            <span className="absolute -bottom-14 lg:-bottom-0 -z-10 left-1/2 lg:left-1/3 -translate-x-1/2 md:scale-125">
                                <svg height={450} width={450} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#03AED2" d="M37.1,-40.9C51.7,-32,69.5,-23.7,73.7,-11.3C77.9,1.1,68.5,17.6,58.6,33C48.7,48.5,38.5,63,23.9,70.3C9.3,77.6,-9.5,77.8,-23.4,70.2C-37.3,62.6,-46.2,47.2,-49.8,32.7C-53.4,18.3,-51.7,4.7,-52.4,-12.4C-53.2,-29.5,-56.4,-50.3,-48,-60.3C-39.7,-70.2,-19.9,-69.5,-4.3,-64.4C11.3,-59.3,22.5,-49.8,37.1,-40.9Z" transform="translate(100 100)" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    {/* Start Blob Maker Image */}
                </div>
            </div>

        </section>
    );
}

export default Home;