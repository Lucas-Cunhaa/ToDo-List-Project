interface SpinnerProps {
    showSpinner: boolean;
}

const Spinner = ({ showSpinner }: SpinnerProps) => {


    return (
        <div className="spinner">
            {showSpinner ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="50" height="50" style={{ shapeRendering: "auto", display: "block", background: "transparent" }} xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g>
                        <path strokeWidth="12" stroke="#12da9e" fill="none" d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843"></path>
                        <path fill="#12da9e" d="M49 1L49 29L63 15L49 1"></path>
                        <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="1s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
                    </g>
                </svg>
            ) : null}
        </div>
    );
}

export default Spinner;
