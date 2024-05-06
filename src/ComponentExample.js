import { useState } from "react"

export default function ComponentExample() {
    const [isOpened, setIsOpened] = useState(false);

    function handleClick() {
        setIsOpened(!isOpened);
    }

    return (
        <div data-testid="btn" onClick={handleClick} className={isOpened ? "opened" : "closed"}>
            Button example
        </div>
    )
}