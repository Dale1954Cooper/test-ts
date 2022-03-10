import React, {FC, useState, useRef} from 'react';

const EventExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrop] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG');
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrop(true);
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrop(false);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrop(false);
        console.log('false');
    }

    return (
        <div>
            <input
                value={value}
                onChange={changeHandler}
                type='text'
                placeholder='ruled'
            />
            <input
                value={value}
                onChange={changeHandler}
                type='text'
                placeholder='unruled'
                ref={inputRef}
            />
            <button onClick={clickHandler}>CLICK ME!</button>
            <div
                onDrag={dragHandler}
                draggable style={{width: 200, height: 200, background: 'red', margin: 15}}>
            </div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', margin: 15}}>
            </div>
        </div>
    );
};

export default EventExample;