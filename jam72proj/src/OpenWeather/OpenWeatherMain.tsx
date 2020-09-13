import React from 'react';
import { OpenWeatherResp, Weather, Main } from './OpenWeatherInterface';

export interface OpenWeatherMainProps {
    latitude:number;
    longitude: number;
}

export interface OpenWeatherMainState {
    url: string;
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
            url: '',
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

    componentDidMount() {
        
        this.funcTest();

    }

    funcTest() {
        fetch(`api.openweathermap.org/data/2.5/weather?lat=39.7695&lon=-86.0697&appid=fd18b03e8677888ed6de2e157e4e2db6&units=imperial`)
        .then(res => res.json())
        .then((data:OpenWeatherResp) => {
            console.log('DATA', data);
            this.setState({ name: data.name })
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.url}</p>
                <p>{this.state.name}</p>
            </div>);
    }
}

export default OpenWeatherMain;