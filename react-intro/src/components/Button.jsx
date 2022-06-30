
export default function Button({onClick, children, disabled}) {

    return (
        <button style={{
            padding:"1rem",
            backgroundColor:"tomato",
            color:"white",
            border:0,
            borderWidth:0,
            fontWeight: "bold",
           

        }} disabled={disabled} onClick={onClick}>
            {children}

       </button>
    )
}