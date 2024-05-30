import MySelf from '../../images/profile/MySelf.png';
import TextAnimation from '../../components/Animations/TextAnimation';

function Home() {
    return (
        <section id="home" className="py-8 px-12">
            <div className="container">
                <div className="flex flex-wrap">
                    {/* Start Cta Profile */}
                    <div className="w-full self-center lg:w-2/3 px-2 py-5">
                        <h1 className="text-3xl font-semibold text-dark dark:text-light">
                            <TextAnimation
                                sequence={[
                                    "Hello Everyone 😀",
                                    2000,
                                    " My Name is Wayan Berdyanto",
                                    2000,
                                    "I'am Web Developer",
                                    2000
                                ]} />
                        </h1>
                        <p className="mt-4 mb-10 leading-5 font-normal tracking-wider text-dark text-sm dark:text-light">Active student at Duta Wacana Christian University majoring in Information Systems with
                            independent learning experience at Bangkit Academy 2023 as Mobile Development using Kotlin. Apart from
                            that, I also have the ability to develop websites and am also able to collaborate with a team.</p>
                        <a href="" className="border-[1px] rounded-md border-primary text-primary font-medium px-6 py-3 text-lg duration-500 hover:bg-primary hover:text-light">Tentang Saya</a>
                    </div>
                    {/* End Cta Profile */}
                    {/* Start Blob Maker Image */}
                    <div className="w-full self-center lg:w-2/6 px-2 py-5">
                        <div className="relative lg:mt-8 lg:-right-28">
                            <img src={MySelf} alt="Gambar Error" height={250} width={300} className="max-w-full mx-auto bg-cover" />
                            <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                                <svg height={350} width={350} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#03AED2" d="M63,-51.1C77.6,-32.1,82.4,-6.1,76.8,17.1C71.2,40.3,55.1,60.8,33.8,71.6C12.5,82.4,-14.2,83.6,-36.7,73.7C-59.2,63.8,-77.5,42.8,-83.6,18.4C-89.6,-5.9,-83.4,-33.8,-67.5,-53.1C-51.5,-72.5,-25.7,-83.4,-0.7,-82.8C24.3,-82.2,48.5,-70.1,63,-51.1Z" transform="translate(100 100)" />
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