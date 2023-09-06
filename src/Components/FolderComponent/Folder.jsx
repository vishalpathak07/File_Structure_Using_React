import './Folder.css'
const FolderComponent = (props) => {
    return (
        <div className="folderWrapper">
            <span className='toggleBtn'> ▶ </span>
            <span>{props.folderData.name}</span>
            <span>
                <button
                    className="createFolderBtn"
                    onClick={() => props.addFolder(props.store, props.folderData.id)}
                >
                    🗂️
                </button>
                <button
                    className="createFileBtn"
                    onClick={() => props.addFile(props.store, props.folderData.id)}
                >
                    📇
                </button>
                <button
                    className="deleteBtn"
                    onClick={() =>
                        props.deleteElem(
                            props.store,
                            props.folderData.id,
                            props.folderData.parentNodeId
                        )
                    }
                >
                    ❌
                </button>
            </span>

        </div>
    );
}

export default FolderComponent;