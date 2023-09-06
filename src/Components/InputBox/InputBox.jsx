import './InputBox.css'

const InputBox = (props) => {
    return (
        <div className="InputDiv">
            <input type="text" placeholder="Enter Name for Folder/File" id="InputBox" value={props.name} onChange={(event) => {
                props.setName(event.target.value);
            }}
            />

        </div>

    );
};

export default InputBox