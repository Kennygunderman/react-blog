import React, { Component } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { v1 as uuidv1 } from 'uuid';
import classes from './LeaveComment.css';
import firebase from "../../firebase";
import { connect } from 'react-redux';

class LeaveComment extends Component {
    state = {
        comment: ""
    }

    handleCommentChange = (event) => {
        const comment = event.target.value;
        this.setState({ comment: comment });
    }

    leaveComment = () => {
        this.setState({ comment: "" })
        firebase
            .firestore()
            .collection('comments')
            .doc(uuidv1())
            .set({
                comment: this.state.comment,
                date: new Date(),
                displayName: this.props.user.displayName,
                postId: this.props.postId,
                uid: this.props.user.uid,
                profilePhotoUrl: this.props.user.photoURL
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            this.props.isAuthed ?
                <div>
                    <img alt="" src={this.props.user.photoURL} className={classes.ProfileImg} />
                    <div className={classes.TextContainer}>
                        <TextField
                            fullWidth
                            multiline
                            rowsMax={4}
                            inputProps={{ maxLength: 500 }}
                            value={this.state.comment}
                            onChange={this.handleCommentChange}
                            label="Leave a comment..." />
                    </div>
                    <Button
                        onClick={this.leaveComment}
                        disabled={this.state.comment === "" && this.props.isAuthed}
                        variant="outlined"
                        className={classes.CommentButton}>
                        comment
                </Button>
                </div> :
                <Typography variant="subtitle1">Log in to leave a comment!</Typography>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthed: state.isAuthed,
        user: state.user
    };
}

export default connect(mapStateToProps)(LeaveComment);