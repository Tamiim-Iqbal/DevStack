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
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <img src={Logo} alt="Dev Stack Logo"/>
            </div>
            <div className="navbar-center">
                <ul className="menu-horizontal px-1 gap-9">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost">Sign In</button>
                <button className="btn btn-secondary rounded-3xl">Sign Up</button>

            </div>
                
        </div>

    );
};

export default Navbar;