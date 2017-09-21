//React
import React, {Component} from 'react';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TripsActions from '../actions/TripsActions';
//Components
import Trips from '../components/trips/Trips';

class TripsScreen extends Component {
    constructor(props, context) {
        super(props, context);

        this.tripSelected = this.tripSelected.bind(this);
    }

    componentDidMount(){
        this.props.actions.fetchTrips({ user_id: 1 });
    }

    tripSelected() {
        alert('You have clicked a trip!')
    }

    render() {
        const { trips } = this.props;

        console.log(trips);

        return (
            <Trips trips={ trips }
                   onPress={ this.tripSelected } />
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        trips: state.trips.lastMonthsTrips,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TripsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripsScreen)