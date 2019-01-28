import React from 'react';
import { connect } from 'react-redux';
import { 
  getRoomsAction,
} from './../../actions/';
import { 
    Grid,
} from '@material-ui/core';
import {
    withStyles
} from '@material-ui/core/styles';
import Loading from './../../components/loading';
import Content from './../../components/content';
import ResultsGrid from './../../components/resultsGrid';
import {
    compose,
    lifecycle,
} from 'recompose';
import {
    withRouter
} from 'react-router-dom';

const styles = {
    gridPaperContainer: {
        padding: 20,
    }
};

export const RoomsPage = ({
    loading,
    classes = {},
    results = [],
    history,    
}) => (
    <Content>
        <Grid
            container
            className={
                classes.gridPaperContainer
            }
        >
            <Grid item>
                {
                    loading ?
                        <Loading />
                    :     <ResultsGrid 
                        results={results}
                    />
                }
            </Grid>
        </Grid>
    </Content>
);

const mapDispatchToProps = dispatch => ({
    getRooms: params => dispatch(getRoomsAction(params))
});

const mapStateToProps = ({ rooms }) => ({
    ...rooms,
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withStyles(
       styles
    ),
    lifecycle({
        componentDidMount() {
            const {
                status
            } = this.props;

            if (status !== 200) { //prevent continous reloading
                this.props.getRooms();
            }
        }
    })
)(RoomsPage)
