import "./buttonemojis.css"

export const ButtonEmojis = ({ generarEmoji }) => {
    return (
        <div className="mybutton">
            <button className="emoji__button" onClick={generarEmoji}>
            <span>Descubre que comer hoy 🤔</span>
            </button>
        </div>
    )
}
