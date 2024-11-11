import './counter-style.css'

const Counter = ({count, setCount}) => {
    return (
        <div className='counter-wrapper'>
            <div className="to-display-column">
                <button className='increment' onClick={() => setCount(count + 1)}>+</button>
                <button className='decrement' onClick={() => setCount(count - 1)}>-</button>
            </div>
            <button onClick={() => setCount(0)} className='reset'>Reset</button>
            <span className='current-count'>{count}</span>
        </div>

    )
}
export default Counter;