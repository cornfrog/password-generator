import "../assets/TitleBar.scss"

const TitleBar = () => {

    return (
        <div className="titlebar">
            <div className="titlebar__logo-and-name">
                <i
                    className="titlebar__logo-and-name__logo lock-icon"
                ></i>
                <p className="titlebar__logo-and-name__name">Password Generator</p>
            </div>
        </div>
    );
}

export default TitleBar;