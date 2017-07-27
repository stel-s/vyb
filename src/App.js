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
let x = [{
    "id": "2017-06-07|10248",
    "day": "2017-06-07",
    "start_time": "2017-06-07T09:00:00.000+01:00",
    "end_time": "2017-06-07T21:00:00.000+01:00",
    "user": {
        "id": 10248,
        "first_name": "Jafar",
        "last_name": "Al Kubanji",
        "name": "Jafar Al Kubanji",
        "initials": "JA",
        "email": "abc@gmail.com",
        "phone_number": "+4412321321",
        "shareable_discount_key": "JAFAR80",
        "comments": "null",
        "vip": false,
        "first_time_customer": true,
        "dietary_preferences": [
            "Gluten Free",
            "Organic"
        ],
        "dietary_preferences_notes": "null",
        "extra_care": false
    },
    "stores": [
        {
            "id": 15,
            "latitude": 51.501249,
            "longitude": -0.192098,
            "address": 98,
            "full_name": "Marks & Spencer Kensington",
            "name": "Kensington",
            "supplier": "Marks & Spencer",
            "supplier_logo": "http://deliver.convibo.dev/assets/delivery-icons/stores/marks-spencer.png"
        }
    ],
    "shoppers": [
        {
            "id": 10248,
            "first_name": "Jafar",
            "last_name": "Al Kubanji",
            "name": "Jafar Al Kubanji",
            "initials": "JA",
            "email": "abc@gmail.com",
            "phone_number": "+4412321321",
            "shareable_discount_key": "JAFAR80",
            "comments": "null",
            "vip": false,
            "first_time_customer": true,
            "dietary_preferences": [
                "Gluten Free",
                "Organic"
            ],
            "dietary_preferences_notes": "null",
            "extra_care": false
        }
    ],
    "drivers": [
        {
            "id": 10248,
            "first_name": "Jafar",
            "last_name": "Al Kubanji",
            "name": "Jafar Al Kubanji",
            "initials": "JA",
            "email": "abc@gmail.com",
            "phone_number": "+4412321321",
            "shareable_discount_key": "JAFAR80",
            "comments": "null",
            "vip": false,
            "first_time_customer": true,
            "dietary_preferences": [
                "Gluten Free",
                "Organic"
            ],
            "dietary_preferences_notes": "null",
            "extra_care": false
        }
    ],
    "hours": [
        {
            "id": 1496822400,
            "start_time": "2017-06-07T09:00:00.000+01:00",
            "end_time": "2017-06-07T10:00:00.000+01:00",
            "shopping_runs": [
                "[]"
            ],
            "delivery_runs": [
                {
                    "id": "D7601",
                    "type": "delivery_run",
                    "start_time": "null",
                    "end_time": "null",
                    "scheduled_start_time": "2017-06-07T09:00:00.000+01:00",
                    "scheduled_end_time": "2017-06-07T10:00:00.000+01:00",
                    "encoded_polyline": "m~iyHpgd@SwAIs@...",
                    "shift": 1214820420,
                    "orders": [
                        {
                            "id": 6984,
                            "notes": "null",
                            "handle_replacements": "call",
                            "unable_to_replace_option": "call",
                            "unreachable_option": "replace",
                            "customer_notes": "Lactofree milk - not skimmed x 2 litres; goat cheddar cheese; silken tofu.",
                            "predicted_delivery_time": "2017-06-07T09:45:00.000+01:00",
                            "delivered": "2017-06-07T09:40:38.590+01:00",
                            "shopping_run": "S6345",
                            "delivery_run": "D7601",
                            "sms_sent": true,
                            "delivery_window_start": "2017-06-07T09:00:00.000+01:00",
                            "delivery_window_end": "2017-06-07T10:00:00.000+01:00",
                            "predicted_cost": 74.61,
                            "supplier_slug": "whole-foods-market",
                            "customer": {
                                "id": 10248,
                                "first_name": "Jafar",
                                "last_name": "Al Kubanji",
                                "name": "Jafar Al Kubanji",
                                "initials": "JA",
                                "email": "abc@gmail.com",
                                "phone_number": "+4412321321",
                                "shareable_discount_key": "JAFAR80",
                                "comments": "null",
                                "vip": false,
                                "first_time_customer": true,
                                "dietary_preferences": [
                                    "Gluten Free",
                                    "Organic"
                                ],
                                "dietary_preferences_notes": "null",
                                "extra_care": false
                            },
                            "address": {
                                "id": 2278,
                                "first_line": "20 Stormont Road",
                                "second_line": "ul",
                                "city": "London",
                                "country": "GB",
                                "latitude": 51.463573,
                                "longitude": -0.156224,
                                "postcode": "SW11 5EL",
                                "customer": 10248
                            },
                            "line_items": [
                                {
                                    "id": "126671"
                                }
                            ],
                            "store": 16,
                            "shopper": 3064,
                            "driver": 10248,
                            "shopping_colour": "#92d542",
                            "delivery_colour": "#92d542",
                            "position": 1,
                            "driving_duration": 21,
                            "acknowledged": true,
                            "vip": false,
                            "extra_care": false,
                            "frozen": false
                        }
                    ],
                    "stores": [
                        16
                    ],
                    "driver": 10248,
                    "shoppers": [
                        3064
                    ]
                }
            ]
        }
    ]
}]
let x2 = [{
    "id": "2017-06-07|10248",
    "day": "2017-06-07",
    "start_time": "2017-06-07T09:00:00.000+01:00",
    "end_time": "2017-06-07T21:00:00.000+01:00",
    "user": {
        "id": 10248,
        "first_name": "Jafar",
        "last_name": "Al Kubanji",
        "name": "Jafar Al Kubanji",
        "initials": "JA",
        "email": "abc@gmail.com",
        "phone_number": "+4412321321",
        "shareable_discount_key": "JAFAR80",
        "comments": "null",
        "vip": false,
        "first_time_customer": true,
        "dietary_preferences": [
            "Gluten Free",
            "Organic"
        ],
        "dietary_preferences_notes": "null",
        "extra_care": false
    },
    "stores": [
        {
            "id": 15,
            "latitude": 51.501249,
            "longitude": -0.192098,
            "address": 98,
            "full_name": "Wholefoods",
            "name": "Kensington",
            "supplier": "Marks & Spencer",
            "supplier_logo": "http://deliver.convibo.dev/assets/delivery-icons/stores/marks-spencer.png"
        }
    ],
    "shoppers": [
        {
            "id": 10248,
            "first_name": "Jafar",
            "last_name": "Al Kubanji",
            "name": "Jafar Al Kubanji",
            "initials": "JA",
            "email": "abc@gmail.com",
            "phone_number": "+4412321321",
            "shareable_discount_key": "JAFAR80",
            "comments": "null",
            "vip": false,
            "first_time_customer": true,
            "dietary_preferences": [
                "Gluten Free",
                "Organic"
            ],
            "dietary_preferences_notes": "null",
            "extra_care": false
        }
    ],
    "drivers": [
        {
            "id": 10248,
            "first_name": "Jafar",
            "last_name": "Al Kubanji",
            "name": "Jafar Al Kubanji",
            "initials": "JA",
            "email": "abc@gmail.com",
            "phone_number": "+4412321321",
            "shareable_discount_key": "JAFAR80",
            "comments": "null",
            "vip": false,
            "first_time_customer": true,
            "dietary_preferences": [
                "Gluten Free",
                "Organic"
            ],
            "dietary_preferences_notes": "null",
            "extra_care": false
        }
    ],
    "hours": [
        {
            "id": 1496822400,
            "start_time": "2017-06-07T09:00:00.000+01:00",
            "end_time": "2017-06-07T10:00:00.000+01:00",
            "shopping_runs": [
                "[]"
            ],
            "delivery_runs": [
                {
                    "id": "D7601",
                    "type": "delivery_run",
                    "start_time": "null",
                    "end_time": "null",
                    "scheduled_start_time": "2017-06-07T09:00:00.000+01:00",
                    "scheduled_end_time": "2017-06-07T10:00:00.000+01:00",
                    "encoded_polyline": "m~iyHpgd@SwAIs@...",
                    "shift": 1214820420,
                    "orders": [
                        {
                            "id": 6984,
                            "notes": "null",
                            "handle_replacements": "call",
                            "unable_to_replace_option": "call",
                            "unreachable_option": "replace",
                            "customer_notes": "Lactofree milk - not skimmed x 2 litres; goat cheddar cheese; silken tofu.",
                            "predicted_delivery_time": "2017-06-07T09:45:00.000+01:00",
                            "delivered": "2017-06-07T09:40:38.590+01:00",
                            "shopping_run": "S6345",
                            "delivery_run": "D7601",
                            "sms_sent": true,
                            "delivery_window_start": "2017-06-07T09:00:00.000+01:00",
                            "delivery_window_end": "2017-06-07T10:00:00.000+01:00",
                            "predicted_cost": 74.61,
                            "supplier_slug": "whole-foods-market",
                            "customer": {
                                "id": 10248,
                                "first_name": "Jafar5",
                                "last_name": "Al Kubanji5",
                                "name": "Jafar Al Kubanji",
                                "initials": "JA",
                                "email": "abc@gmail.com",
                                "phone_number": "+4412321321",
                                "shareable_discount_key": "JAFAR80",
                                "comments": "null",
                                "vip": false,
                                "first_time_customer": true,
                                "dietary_preferences": [
                                    "Gluten Free",
                                    "Organic"
                                ],
                                "dietary_preferences_notes": "null",
                                "extra_care": false
                            },
                            "address": {
                                "id": 2278,
                                "first_line": "20 Stormont Road",
                                "second_line": "ul",
                                "city": "London",
                                "country": "GB",
                                "latitude": 51.463573,
                                "longitude": -0.156224,
                                "postcode": "SW11 5EL",
                                "customer": 10248
                            },
                            "line_items": [
                                {
                                    "id": "126671"
                                }
                            ],
                            "store": 16,
                            "shopper": 3064,
                            "driver": 10248,
                            "shopping_colour": "#92d542",
                            "delivery_colour": "#92d542",
                            "position": 1,
                            "driving_duration": 21,
                            "acknowledged": true,
                            "vip": false,
                            "extra_care": false,
                            "frozen": false
                        }
                    ],
                    "stores": [
                        16
                    ],
                    "driver": 10248,
                    "shoppers": [
                        3064
                    ]
                }
            ]
        }
    ]
}]

let events = [
    {
        'title': 'Happy Hour',
        'start': moment('2017-06-07T09:00:00.000+01:00'),
        'end': moment('2017-06-07T10:00:00.000+01:00'),
        desc: 'Most important meal of the day'
    },
    {
        'title': 'All Day Event',
        'allDay': false,
        'start': new Date(2017, 6, 6,1,2,2),
        'end': new Date(2017, 6, 6)
    },
    {
        'title': 'Long Event',
        'start': new Date(2017, 3, 7),
        'end': new Date(2017, 3, 10)
    },
]

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])
function Event({ event }) {
    return (
        <span>
      <DeliveryCard order={x[0]} />
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
            defaultView='agenda'
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
    constructor(props){
        super(props)
        this.order = x;
    }


  render() {
    return (
    <MuiThemeProvider>
        <div className='App'>
            <div className="App-header">
            </div>
            <div className={classes.container}>
                <p className="App-intro">
                </p>
                <MyCalendar />
                Day View
                {[
                    '09:00','10:00','11:00','12:00', '12:30', '13:00', '13:30', '14:00',
                    '14:30', '15:00', '15:30', '19:00', '20:00','21:00'
                ].map((item,index)=> {
                    return (
                        <div >
                            <Divider />
                            {item}
                            <div style={styles.flexContainer}>
                                {item === '11:00' && <DeliveryCard order={this.order[0]} />}
                                {item === '15:00' && <div style={styles.flexContainer}>
                                    <DeliveryCard order={this.order[0]} />
                                    <DeliveryCard order={this.order[0]} />
                                    <DeliveryCard order={x2[0]} />
                                </div>
                                }
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
