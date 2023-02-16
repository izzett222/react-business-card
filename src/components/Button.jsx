import PropTypes from "prop-types";

export default function Button({children, icon, iconStyle, secondary}) {
    return <button className={`${secondary ? 'bg-[#5093E2] text-white' : 'bg-white text-black'} flex items-center gap-2 border-[#D1D5DB] rounded-md px-7 py-2.5`}><img src={icon} alt="" className={iconStyle} /> {children}</button>
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconStyle: PropTypes.string.isRequired,
    secondary: PropTypes.bool
}