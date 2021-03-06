import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layers/Spinner';
import { getAllProfile } from '../../actions/profile';
import ProfileItem from './ProfileItems';

const Profiles = ({ getAllProfile, profile: { profiles, loading } }) => {

    useEffect(() => {
        getAllProfile();
    }, [getAllProfile]);
    return (
        <Fragment>
            {loading ? <Spinner /> : <Fragment>
                <h1 className="large text-primary">Developers</h1>
                <p className="lead">
                    <i className="fab fa-connectdevelop"></i>Browse and connect with developers
                </p>

                <div className="profiles">
                    {Profiles.length > 0 ? (profiles.map(profile => (
                        <ProfileItem key={profile._id} profile={profile} />
                    ))) : <h4>No profiles found....</h4>}
                </div>
            </Fragment>}
        </Fragment>
    )
}

Profiles.propTypes = {
    getAllProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getAllProfile })(Profiles);