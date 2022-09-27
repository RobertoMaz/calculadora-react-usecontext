import { createContext, useContext, useState } from "react";

const AppContext = createContext({
    memory: null,
    operation: null,
    currentValue: 0,
    addNumber: (value) => {},
    addOperation: (operation) => {},
    getResult: () => {},
    executeAction: (action) => {}
});

export default function CalculatorState({children}) {

    const [memory, setMemory] = useState(null);
    const [operation, setOperation] = useState(null);
    const [currentValue, setCurrentValue] = useState(0);
    const [isReset, setIsReset] = useState(true);

    function handleAddNumber(value) {
        if(isReset){
            setCurrentValue(value);
            setIsReset(false);
        } else {
            const newValue = currentValue.toString() + value;
            setCurrentValue(parseInt(newValue));
        }
    }

    function handleAddOperation(op) {
        if(currentValue){
            if(operation){
                handleGetResult();
            } else {
                setOperation(op);
                setMemory(currentValue);
                setCurrentValue(0);
                setIsReset(true);
            }
        }
    }

    function handleGetResult() {
        let result = 0;
        if(currentValue && operation && memory) {
            switch (operation) {
                case "+":
                    result = parseFloat(currentValue) + parseFloat(memory);
                    break;
                // case "-":
                //     result = parseFloat(currentValue) - parseFloat(memory);
                //     break;
                // case "*":
                //     result = parseFloat(currentValue) * parseFloat(memory);
                //     break;
                // case "/":
                //     result = parseFloat(currentValue) / parseFloat(memory);
                //     break;
                // case "%":
                //     result = parseFloat(currentValue) % parseFloat(memory);
                //     break;
            
                default:
                    break;
            }

            setCurrentValue(result);
            setOperation(null);
            setMemory(result);
            setIsReset(true);
        }
    }

    function handleExecuteAction(action) {
        switch (action) {
            case "=":
                handleGetResult();
                break;
        
            default:
                break;
        }
    }



    return (
        <AppContext.Provider value={{
            memory,
            operation,
            currentValue,
            addNumber: handleAddNumber,
            addOperation: handleAddOperation,
            getResult: handleGetResult,
            executeAction: handleExecuteAction
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}