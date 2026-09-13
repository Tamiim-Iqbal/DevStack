import Logo from '../../../public/DevStack-resource/assets/logo-text.png'

const Navbar = () => {

    const links = <>
        <li className="mb-2">Home</li>
        <li className="mb-2">Technologies</li>
        <li className="mb-2">Projects</li>
        <li className="mb-2">About</li>
        <li className="mb-2">Contact</li>

    </>
    return (
        <div className="sticky top-0 z-50 bg-white">
            <div className="w-9/11 navbar container mx-auto">
            <div className="navbar-start">
                <img src={Logo} alt="Dev Stack Logo"/>
            </div>
            <div className="navbar-center">
                <ul className="menu-horizontal px-1 gap-9">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <button className="btn btn-ghost rounded-3xl">Sign In</button>
                <button className="btn gradient-button rounded-3xl text-white">Sign Up</button>

            </div>
                
        </div>
        </div>
        

    );
};

export default Navbar;