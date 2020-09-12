import React from 'react';

export interface OpenWeatherMainProps {
    url: string,
}

export interface OpenWeatherMainState {
    name: string;
    description: string;
    tempImp: number;
    tempMet: number;
    min: number;
    max: number;
}

class OpenWeatherMain extends React.Component<OpenWeatherMainProps, OpenWeatherMainState> {
    constructor(props: OpenWeatherMainProps) {
        super(props);
        this.state = {
            name: '',
            description: '',
            tempImp: 0,
            tempMet: 0,
            min: 0,
            max: 0
        };
        this.toCelciuis = this.toCelciuis.bind(this);
        this.funcTest = this.funcTest.bind(this);
    }

    toCelciuis(temp: number): number {
        return ((temp - 32) * 5) / 9;
    }

    componentWillMount() {
        this.funcTest();

    }

    funcTest() {
        fetch(this.props.url).then(res => res.json()).then(data => {
            console.log('DATA', data);
            this.setState({ name: data.name })
        })
    }

    render() {
        return (
            <div>
                <p>{this.props.url}</p>
                <p>{this.state.name}</p>
            </div>);
    }
}

export default OpenWeatherMain;