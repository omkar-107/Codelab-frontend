import React, { useState } from 'react';

const FileDrop = () => {
    const [dragging, setDragging] = useState(false);
    const [fileNames, setFileNames] = useState([]);
    const acceptedFileTypes = ['text/plain']; // Define accepted file types

    const handleDragEnter = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);

        const files = Array.from(e.dataTransfer.files);

        // Check if dropped files are of the accepted types
        const validFiles = files.filter(file => acceptedFileTypes.includes(file.type));

        if (validFiles.length > 0) {
            if (validFiles.length > 1) {
                alert('Please select only one file');
            }
            else {
                console.log(validFiles[0].type);
                validFiles.forEach(file => {
                    const reader = new FileReader();

                    reader.onload = (event) => {
                        const fileContent = event.target.result;
                        console.log(fileContent);

                        // You can further process or display the file content as needed
                    };

                    reader.readAsText(file);
                });
                const newFileNames = validFiles.map(file => file.name);
                setFileNames(newFileNames);
            }
        } else {
            alert('Invalid file type. Please drop a C, C++, Java, or Python source code file.');
        }
    };

    return (
        <div className='flex justify-evenly m-10'>
            <div className=' flex flex-col justify-evenly'>
                <h1 className=' text-4xl font-semibold text-slate-700'>Already Have Code File ... ?</h1>
                <h1 className=' text-4xl text-slate-800'>Drop it here</h1>
            </div>
            <div
                className={`${dragging ? 'dragging' : ''} border-2 border-black border-dashed w-[800px] h-[200px] flex flex-col justify-center items-center hover:bg-red-100 transition-all 0.5 text-lg font-medium mt-12`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {dragging ? 'Drop a source code file here (C, C++, Java, or Python)' : 'Drag and drop a source code file here (C, C++, Java, or Python)'}
                {fileNames.length > 0 && (
                    <div className="file-names">
                        <br></br>
                        <h3>Dropped File:</h3>
                        <ul>
                            {fileNames.map((fileName, index) => (
                                <li key={index}>{fileName}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileDrop;