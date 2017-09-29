//React
import React, {Component} from 'react';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TripActions from '../actions/TripActions';
//Components
import Trip from '../components/Trip/Trip';



class TripScreen extends Component {
    constructor(props, context) {
        super(props, context);

        this.tripSelected = this.tripSelected.bind(this);

    }

    componentDidMount(){
        this.props.actions.fetchTrip({ user_id: 1 });
    }

    tripSelected() {
        alert('You have clicked a trip!')
    }

    render() {
        const { trip } = this.props;

        return (

            <Trip trip={ trip }
                   onPress={ this.tripSelected } />
        );

    }
}


function mapStateToProps(state) {
    console.log('%%%%%%%%%%%');
    console.log(state);
    return {
        trip: state.trip,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TripActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripScreen)