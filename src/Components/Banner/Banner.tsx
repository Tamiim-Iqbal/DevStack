import bannerImg from '../../../public/DevStack-resource/assets/banner-stack.png'

const Banner = () => {
    return (
        <div className="hero w-9/11 container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} className="max-w-md" />
                <div>
                    <h1 className="w-3/5 text-5xl font-bold">Build Your Ideal <span className="gradient-text">Development Stack</span></h1>
                    <p className="py-6">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                    <div className="flex gap-4">
                        <button className="btn gradient-button mt-6 rounded-lg text-white">Explore Technologies</button>
                    <button className="btn mt-6 rounded-lg bg-white">Learn More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;