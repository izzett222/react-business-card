import PropTypes from "prop-types";
export default function Paragraph({children, title}) {
    return (
        <div>
            <h3 className="font-bold leading-[1.5]">{title}</h3>
            <p className="text-[#DCDCDC] text-sm">{children}</p>
        </div>
    )
}

Paragraph.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}