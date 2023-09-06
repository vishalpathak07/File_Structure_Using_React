import './File.css'
const FileComponent = (props) => {
    return (
        <div className="fileWrapper">
            <span>{props.fileData.name}</span>
            <span
                className="deleteBtn"
                onClick={() =>
                    props.deleteElem(props.store, props.fileData.id, props.fileData.parentNodeId)}
            >❌
            </span>
        </div>
    );
}

export default FileComponent;