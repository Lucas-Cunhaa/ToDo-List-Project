interface SpinnerBarProps {
    showSpinner: boolean;
}
const SpinnerBar = ({ showSpinner }: SpinnerBarProps) => {
    return (
        <div className="spinner-bar">
            {showSpinner ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                    width="400"
                    height="400"
                    style={{ shapeRendering: "auto", display: "block", background: "rgb(255, 255, 255)" }}
                >
                    <g>
                        <rect fill="#d1dde4" height="40" width="15" y="30" x="17.5">
                            <animate
                                begin="-0.2s"
                                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                                values="18;30;30"
                                keyTimes="0;0.5;1"
                                calcMode="spline"
                                dur="1s"
                                repeatCount="indefinite"
                                attributeName="y"
                            />
                            <animate
                                begin="-0.2s"
                                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                                values="64;40;40"
                                keyTimes="0;0.5;1"
                                calcMode="spline"
                                dur="1s"
                                repeatCount="indefinite"
                                attributeName="height"
                            />
                        </rect>
                        <rect fill="#f5c594" height="40" width="15" y="30" x="42.5">
                            <animate
                                begin="-0.1s"
                                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                                values="21;30;30"
                                keyTimes="0;0.5;1"
                                calcMode="spline"
                                dur="1s"
                                repeatCount="indefinite"
                                attributeName="y"
                            />
                            <animate
                                begin="-0.1s"
                                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                                values="58;40;40"
                                keyTimes="0;0.5;1"
                                calcMode="spline"
                                dur="1s"
                                repeatCount="indefinite"
                                attributeName="height"
                            />
                        </rect>
                        <rect fill="#5ac7aa" height="40" width="15" y="30" x="67.5">
                            <animate
                                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                                values="21;30;30"
                                keyTimes="0;0.5;1"
                                calcMode="spline"
                                dur="1s"
                                repeatCount="indefinite"
                                attributeName="y"
                            />
                            <animate
                                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                                values="58;40;40"
                                keyTimes="0;0.5;1"
                                calcMode="spline"
                                dur="1s"
                                repeatCount="indefinite"
                                attributeName="height"
                            />
                        </rect>
                    </g>
                </svg>
            ) : null}
        </div>
    );
};


export default SpinnerBar;
