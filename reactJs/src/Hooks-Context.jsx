

// useContext work as a communicatio channel
// its act as a broadcast channel (send message to multiple compounds in a single time)


import Par from "./parent"
function Root() {
    return(
        <>
            <h1>Root</h1>
            <Par />
        </>
    )
}
export default Root;