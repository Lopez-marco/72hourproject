import React from 'react';

export interface OpenWeatherMainProps {
    
}
 
export interface OpenWeatherMainState {
    
}
 
class OpenWeatherMain extends React.Component<OpenWeatherMainProps, OpenWeatherMainState> {
    constructor(props: OpenWeatherMainProps) {
        super(props);
        this.state = {somethting : 'yes' };
    }
    render() { 
        return ( 
        <div>

        </div>);
    }
}
 
export default OpenWeatherMain;