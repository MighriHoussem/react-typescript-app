import { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface WelcomeProps {
    name?: string, //optional props
    message: string
};

const Welcome = (props: WelcomeProps): JSX.Element => {
    const { message } = props;


    //component state 
    const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null)

    let value: string = 'React App Developer';

    let numberValue: number = Math.random() * 1500;

    let boolValue: boolean = true;

    let arrayVal: number[] = [Math.random() * 10, Math.random() * 20, Math.random() * 30];

    let stringArrayVal: Array<string> = ['Test', 'React', 'JSX', 'TSX'];

    //tuple value 
    let tuple: [string, number] = ['React App', 2022];

    //enum value 
    enum enumValue { a = 1, b = 2 };

    let enumValA: enumValue = enumValue.b;

    //any type
    let valueAny: any = 'Texte Any';

    //void type
    const wanrUser = (): void => {
        console.log("Warning");
        //setWelcomeMessage("1");
    };


    wanrUser();

    return (
        <>
            <NavLink to={'/users'}><h2>Users list</h2> </NavLink>
            <h1>Your message is {message}</h1>
            <h2>Your value is {value} with Type {typeof value}</h2>

            <div>
                <h4>Your number value is {numberValue} with Type {typeof numberValue}</h4>
            </div>
            <div>
                <h4>Your boolean value is {boolValue} with Type {typeof boolValue}</h4>
            </div>

            <div>
                <h4>Your array value is {arrayVal} with Type {typeof arrayVal}</h4>
            </div>
            <div>
                <h4>Your array of strings value is {stringArrayVal.toString()} with Type {typeof stringArrayVal}</h4>
            </div>

            <div>
                <h4>Your tuple value is {tuple.toString()} with Type {typeof tuple}</h4>
            </div>

            <div>
                <h4> Your enumValue value is {enumValA} with Type {typeof enumValue}</h4>
            </div>

            <div>
                <h4> Your valueAny value is {valueAny} with Type {typeof valueAny}</h4>
            </div>
        </>
    )
}

export default Welcome;