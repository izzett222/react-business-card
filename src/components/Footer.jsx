import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import github from "../assets/github.svg"

export default function Footer() {
    return (
        <footer className="rounded-b-md h-[64px] bg-[#161619] flex justify-center gap-6 items-center">
            <img alt="" src={twitter} />
            <img alt="" src={facebook} />
            <img alt="" src={instagram} />
            <img alt="" src={github} />
        </footer>
    )
}