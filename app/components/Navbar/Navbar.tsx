import Container from "../Container";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-lg">
            <div className="
            py-1
            border-b-[0px]
            "
            >
                <Container>
                    <div className="
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                    "
                    >
                        <Logo />
                    </div>
                </Container>
            </div>
        </div>
    );
}
export default Navbar;