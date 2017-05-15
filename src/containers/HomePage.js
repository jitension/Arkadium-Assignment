import React, { Component } from 'react';
import logo from '../logo.svg';
import PropTypes from 'prop-types';
import '../App.css';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};

const HomePage = ({
    movieData,
    onSubmit,
    callChange,
    successMessage,
    errorMessage,
    callHomepage,
    selectError
}) => (
        <div className="App">
            <div className="App-header">
                <img src="http://www.arkadium.com/us/wp-content/uploads/2015/08/uEA0E-arkadium-logo-stacked.svg" className="App-logo" alt="logo" />
                <h2>Welcome To The Quiz!</h2>
            </div>

            {errorMessage &&
                <div className="result">
                    <h2 className="error-message">{errorMessage}</h2>
                    <RaisedButton
                        type="button"
                        label="Wanna Play Again??"
                        primary
                        onClick={callHomepage}
                    />
                </div>
            }

            {successMessage &&
                <div className="result">
                    <h2 className="success-message">{successMessage}</h2>
                    <RaisedButton
                        type="button"
                        label="Wanna Play Again??"
                        primary
                        onClick={callHomepage}
                    />
                </div>
            }
            {!successMessage && !errorMessage &&

                <form action="/" onSubmit={onSubmit}>
                    <center>
                        <div className="card w-75">
                            <div className="card-block">
                                {selectError && <p className="error-message"> {selectError}</p>}
                                <h3 className="card-title">{movieData.title}</h3>
                                <p className="card-text">{movieData.title} movie was voted by how many people on <strong>IMTB?</strong></p>
                                <div >
                                    <div>
                                        <RadioButtonGroup name="shipSpeed" defaultSelected="" onChange={callChange}>
                                            <RadioButton
                                                value={movieData.vote_count}
                                                label={movieData.vote_count}
                                                style={styles.radioButton}
                                            />
                                            <RadioButton
                                                value={movieData.vote_count + 50}
                                                label={movieData.vote_count + 50}
                                                style={styles.radioButton}
                                            />
                                            <RadioButton
                                                value={movieData.vote_count + 100}
                                                label={movieData.vote_count + 100}
                                                style={styles.radioButton}
                                            />
                                            <RadioButton
                                                value={movieData.vote_count - 75}
                                                label={movieData.vote_count - 75}
                                                style={styles.radioButton}
                                            />
                                        </RadioButtonGroup>
                                    </div>
                                </div>
                            </div>
                            <RaisedButton
                                type="submit"
                                label="SUBMIT"
                                primary
                            />
                        </div>
                    </center>
                </form>
            }
        </div>
    );

HomePage.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    callChange: PropTypes.func.isRequired,
    callHomepage: PropTypes.func.isRequired,
    successMessage: PropTypes.object.isRequired,
    errorMessage: PropTypes.object.isRequired,
    movieData: PropTypes.object.isRequired,
}

export default HomePage;
