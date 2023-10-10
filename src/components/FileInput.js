import React from "react";

const ImportFromFileBodyComponent = () => {
    let fileReader;

    const handdleFileRead = (e) => {
        const content = fileReader.result;
        console.log(content);
    };

    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handdleFileRead;
        fileReader.readAsText(file);
    };

    return <div className="upload-expennse">
        <input type="file" id="file" className="input-file" accept=".txt" onChange={e => handleFileChosen(e.target.files[0])} />
    </div>
};

export default ImportFromFileBodyComponent;