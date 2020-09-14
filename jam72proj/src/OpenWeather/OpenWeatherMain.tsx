import React from 'react';
import { OpenWeatherResp } from './OpenWeatherInterface';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export interface OpenWeatherMainProps {
    url: string;
}

export interface OpenWeatherMainState {
    date: Date;
    name: string;
    description: string;
    tempImp: number;
    tempMet: number;
    min: number;
    max: number;
    imperial: boolean;
}

class OpenWeatherMain extends React.Component<OpenWeatherMainProps, OpenWeatherMainState> {
    constructor(props: OpenWeatherMainProps) {
        super(props);
        this.state = {
            date: new Date(),
            name: '',
            description: '',
            tempImp: 0,
            tempMet: 0,
            min: 0,
            max: 0,
            imperial: true
        };
        this.toCelcius = this.toCelcius.bind(this);
        this.funcTest = this.funcTest.bind(this);
        this.displayImperial = this.displayImperial.bind(this);
        this.imperialTrue = this.imperialTrue.bind(this);
        this.imperialFalse = this.imperialFalse.bind(this);
    }

    toCelcius(temp: number): number {
        return ((temp - 32) * 5) / 9;
    }

    componentDidMount() {
        this.funcTest();
    }

    funcTest() {
        fetch(this.props.url)
            .then(res => res.json())
            .then((data: OpenWeatherResp) => {
                console.log('DATA', data);
                this.setState({
                    name: data.name,
                    description: data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1),
                    tempImp: Math.round(data.main.temp),
                    min: Math.round(data.main.temp_min),
                    max: Math.round(data.main.temp_max)
                })
            })
    }

    displayImperial() {
        if (!this.state.imperial) {
            return (
                <div id='weatherTemps'>
                    <p id='weatherMainTemp'>{Math.round(this.toCelcius(this.state.tempImp))} °C</p>
                    <div id='weatherMinMax' >
                        <div id='weatherMin' className='weatherMinMaxClass'>
                            <p className='weatherSmallTemp' >{Math.round(this.toCelcius(this.state.min))} °C</p>
                            <p className='weatherSmallTempName'>min</p>
                        </div>
                        <div id='weatherMax' className='weatherMinMaxClass'>
                            <p className='weatherSmallTemp'>{Math.round(this.toCelcius(this.state.max))} °C</p>
                            <p className='weatherSmallTempName'>max</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div id='weatherTemps'>
                    <p id='weatherMainTemp'>{this.state.tempImp} °F</p>
                    <div id='weatherMinMax' >
                        <div id='weatherMin' className='weatherMinMaxClass'>
                            <p className='weatherSmallTemp' >{this.state.min} °F</p>
                            <p className='weatherSmallTempName'>min</p>
                        </div>
                        <div id='weatherMax' className='weatherMinMaxClass'>
                            <p className='weatherSmallTemp'>{this.state.max} °F</p>
                            <p className='weatherSmallTempName'>max</p>
                        </div>
                    </div>
                </div>
            );
        }
    }

    imperialTrue() {
        this.setState({ imperial: true });
    }
    imperialFalse() {
        this.setState({ imperial: false });
    }

    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <Grid container justify='center' id='weatherContainer'>
                        <div id='weatherTop'>
                            <div id='weatherDate'> {this.state.date.toDateString()} </div>
                            <div id='weatherButtons'>
                                <ButtonGroup color="primary" aria-label="outlined primary button group">
                                    <Button onClick={this.imperialTrue}>°F</Button>
                                    <Button onClick={this.imperialFalse}>°C</Button>
                                </ButtonGroup>
                            </div>
                        </div>
                        <div id='weatherDetails'>
                            <div id='weatherDesc'>
                                <h3>{this.state.name}</h3>
                                <h5>{this.state.description}</h5>
                            </div>
                            <Grid item xs={6}>
                                {this.displayImperial()}
                            </Grid>

                        </div>

                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default OpenWeatherMain;