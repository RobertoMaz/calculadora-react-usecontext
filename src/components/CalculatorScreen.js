import { useAppContext } from "./CalculatorState";

function CalculatorScreen() {

    const calculator = useAppContext();

    return (
        <div className="calculatorScreen">
            <div>
                Memori: {calculator.memory}
                <br></br>
                Operation: {calculator.operation}
            </div>
            <div className="calculatorCurrentValue" >{calculator.currentValue}</div>
        </div>
    );
}

export default CalculatorScreen;