import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';

import RaisedButton from 'material-ui/RaisedButton';
import { styles, classes } from './style';
import DeliveryCard from './DeliveryCard'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
let data = {
    orders: [
        {
            id: 1,
            name: 'Niuck',
            surName: 'CartMan',
            price: 54.44,
            items: 5,
            "address":{
                "id":2278,
                "first_line":"20 Stormont Road",
                "second_line":null,
                "city":"London",
                "country":"GB",
                "latitude":"51.4635732",
                "longitude":"-0.1562239",
                "postcode":"SW11 5EL",
                "customer":11993
            },
            time: 44,
            "scheduled_start_time":"2017-06-07T09:00:00.000+01:00",
            "scheduled_end_time":"2017-06-07T10:00:00.000+01:00",
            "predicted_delivery_time":"2017-06-07T09:45:00.000+01:00",
            "supplier_slug":"whole-foods-market",
        },
        {
            id: 31,
            items: 5,
            name: 'Niuck',
            surName: 'CartMan',
            price: 54.44,
            "address":{
                "id":2278,
                "first_line":"20 Stormont Road",
                "second_line":null,
                "city":"London",
                "country":"GB",
                "latitude":"51.4635732",
                "longitude":"-0.1562239",
                "postcode":"SW11 5EL",
                "customer":11993
            },
            time: 44,
            "scheduled_start_time":"2017-06-07T09:00:00.000+01:00",
            "scheduled_end_time":"2017-06-07T10:00:00.000+01:00",
            "predicted_delivery_time":"2017-06-07T09:45:00.000+01:00",
            "supplier_slug":"whole-foods-market",
        },

    ]
}

let events = [
    {
        'title': 'All Day Event',
        'allDay': true,
        'start': new Date(2015, 3, 0),
        'end': new Date(2015, 3, 1)
    },
    {
        'title': 'All Day Event',
        'allDay': true,
        'start': new Date(2015, 3, 0),
        'end': new Date(2015, 3, 1)
    },
    {
        'title': 'Long Event',
        'start': new Date(2015, 3, 7),
        'end': new Date(2015, 3, 10)
    },
]

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])
function Event({ event }) {
    return (
        <span>
     <DeliveryCard/>
    </span>
    )
}

function EventAgenda({ event }) {
    return <span>

  </span>
}

const MyCalendar = props => (
    <div>
        <BigCalendar
            {...this.props}
            events={events}
            views={allViews}
            defaultView='agenda'
            defaultDate={new Date(2015, 3, 1)}

            components={{
                event: Event,
                agenda: {
                    event: EventAgenda
                }
            }}
        />
    </div>
);

class App extends Component {



  render() {
    return (
    <MuiThemeProvider>
        <div className='App'>
            <div className="App-header">
            </div>
            <div className={classes.container}>
                <p className="App-intro">
                </p>
                {/*<MyCalendar />*/}
                {[
                    '12:00', '12:30', '13:00', '13:30', '14:00',
                    '14:30', '15:00', '15:30', '19:00', '20:00','21:00'
                ].map((item,index)=> {
                    return (
                        <div >
                            <Divider />
                            {item}
                            <div style={styles.flexContainer}>
                                <DeliveryCard/>
                                <DeliveryCard/>
                            </div>


                        </div>
                    )
                    })
                }
                <div style={{flexBasis: '100%',
                    maxWidth: '100%'}}>
                </div>

            </div>
        </div>
    </MuiThemeProvider>

    );
  }
}

export default App;
