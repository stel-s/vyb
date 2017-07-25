import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import { styles, classes } from './style';
import Paper from 'material-ui/Paper';
import frozen from './icons/frozen.jpg';
const style = {
    height: 250,
    width: 250,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    padding: '16px'
};
class DeliveryCard extends Component {
    state = {
        isFrozen: true
    }

    render() {
        return (
            <div>
                <Paper style={{...style,backgroundColor: this.props.color}} zDepth={2}>
                    whole foods
                    {this.state.isFrozen && <div style={{float: 'right'}}>
                        <img width="25" height="25" src={frozen} />
                    </div>}
                    <div style={{display:'flex',flexDirection: 'column', lineHeight: '23px'}}>
                        <div  style={{alignSelf:'flex-start', fontWeight: '600', color:'rgba(0, 0, 0, 0.64)'}}>Name Surname</div>
                        <div  style={{alignSelf:'flex-start', color: 'green'}}>$15.37</div>
                        <div  style={{alignSelf:'flex-start'}}>
                            Items: &nbsp;
                            <span style={{color:'gray'}}>3</span>
                        </div>
                        <div  style={{alignSelf:'flex-start',opacity:'0.6'}}>SW114ND</div>

                        <div  style={{alignSelf:'flex-start'}}>Shopped By

                        </div>
                        <div  style={{alignSelf:'flex-start',opacity:'0.6'}}>Delivery Time <span style={{color:'red'}}>17min</span></div>
                    </div>

                    <RaisedButton style={{marginTop: '30px'}} label="acknowledge"  />

                </Paper>
            </div>
        );
    }
}

export default DeliveryCard;
