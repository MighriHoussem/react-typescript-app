import React from 'react';

//HOC Example with TypeScript

const initialState = {
    name: 'Test TypeScript',
    message: 'Welcome to TypeScript with React'
};


type State = Readonly<typeof initialState>;


const HOCMessage = (WrappedComponent: any): any => {
    class HOC extends React.Component<{}, State> {

        readonly state: State = initialState;

        render() {
            return (
                <WrappedComponent
                    name={this.state.name}
                    message={this.state.message}
                />
            )
        }
    }
    return HOC;
};

export default HOCMessage;