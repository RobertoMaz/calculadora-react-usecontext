import { useAppContext } from "./CalculatorState";

function CalculatorScreen() {

    const calculator = useAppContext();

    return (
        <div className="calculatorScreen">
            <div>
                <span>
                {calculator.memory}
                </span>
                <br></br>
                <span>
                {calculator.operation}
                </span>
                <br></br>
            </div>
            <div className="calculatorCurrentValue" >{calculator.currentValue}{calculator.isDecimal ? "." : ""} </div>
        </div>
    );
}

export default CalculatorScreen;