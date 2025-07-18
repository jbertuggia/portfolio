import "./darkModeToggle.css"

const DarkModeToggle = ({darkMode, handleDarkMode}) => {

    return (
        <section className='darkModeToggleContainer'>
            <button className="darkModeButton" onClick={handleDarkMode}>
                {darkMode ? '☀️ Light':'🌙 Dark'}
            </button>
        </section>
    )

}

export default DarkModeToggle