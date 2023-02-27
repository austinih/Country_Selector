export default function LangSearch (props) {
    return (
        <div className="homeBox" style={{backgroundColor: 'rgb(158, 60, 208)'}}>
            <p>What language do you want to hear?</p>
            <input list='languages'/>
                <datalist id="languages">
                    <option value="Spanish" />
                    <option value="French" />
                    <option value="Korean" />
                </datalist>
            <button>Search</button>
        </div>
    )
}