import React, {useEffect, useState, useRef} from "react";

export default function MetaForm(){
    const [title, setTitle] = useState('');
    const [producer, setProducer] = useState('');
    const [key, setKey] = useState('');
    const [bpm, setBPM] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log('title:', title);
        console.log('prod name:', producer);
    }

    return(
        <form onSubmit={handleSubmit} className="meta-form">
            <div>
                <label htmlFor="title">Title</label>
                <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="producer">Producer</label>
                <input
                id="producer"
                type="text"
                value={producer}
                onChange={(e) => setProducer(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="key">Key</label>
                <input
                id="key"
                type="text"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="BPM">BPM</label>
                <input
                id="BPM"
                type="text"
                value={bpm}
                onChange={(e) => setBPM(e.target.value)}
                />
            </div>
            <div>
                <label className='extra-text-space' htmlFor="description">Description</label>
                <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4" 
                cols="50"
                />
            </div>
            <div className="extra-button-space">
                <button className="button-59" role="button" type="submit">Submit</button>
            </div>
    </form>
    );
}