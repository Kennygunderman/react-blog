import React, { Component } from 'react';
import DetailContent from '../../components/DetailContent/DetailContent';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import Aux from '../../hoc/Auxiliary';
import ReactHtmlParser from 'react-html-parser';
import { Grid, Typography } from '@material-ui/core';
import Comments from '../../components/Comments/Comments';
import BlogItem from '../../components/BlogItem/BlogItem';
import classes from './BlogDetail.css';
import firebase from "../../firebase";

class BlogDetail extends Component {
    state = {
        comments: [],
        item: null
    }

    commentsRef = firebase.firestore().collection("comments");

    componentDidMount() {
        const item = this.props.history.location.state.item;
        this.setState({ isLoading: true });
        this.commentsRef.onSnapshot((querySnapshot) => {
            const comments = [];
            querySnapshot.forEach((doc) => {
                if (doc.data().postId === item.id) {
                    const data = doc.data()
                    const comment = {
                        ...data,
                        date: new Date(data.date.seconds * 1000), //format date as it comes in from firebase
                        id: doc.id
                    }
                    comments.push(comment);
                }
            });

            comments.sort((a, b) => b.date.getTime() - a.date.getTime())
            this.setState({ isLoading: false, comments: comments, item: item });
        });
    }

    render() {
        console.log(this.state);
        return this.state.item != null ? (
            <Aux>
                <DetailHeader title={this.state.item.title} image={this.state.item.image} />
                <Grid container spacing={0}>
                    <Grid item md={9} xs={12}>
                        <div className={classes.DetailSpacing}>
                            <DetailContent
                                title={this.state.item.title}
                                date={this.state.item.date}>
                                {ReactHtmlParser(this.state.item.summary)}
                            </DetailContent>
                            <Comments comments={this.state.comments} postId={this.state.item.id} />
                        </div>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Typography variant="h6">Other Posts</Typography>
                        <div className={classes.Divider} />
                        <div className={classes.BlogCardSpacing}><BlogItem hideImg={true} item={{ date: new Date(), title: "dummy", summary: "stupid stupid stupid stupid this is a dummy summary", image: '' }} /></div>
                        <div className={classes.BlogCardSpacing}><BlogItem hideImg={true} item={{ date: new Date(), title: "dummy", summary: "stupid stupid stupid stupid this is a dummy summary", image: '' }} /></div>
                        <div className={classes.BlogCardSpacing}><BlogItem hideImg={true} item={{ date: new Date(), title: "dummy", summary: "stupid stupid stupid stupid this is a dummy summary", image: '' }} /></div>
                        <div className={classes.BlogCardSpacing}><BlogItem hideImg={true} item={{ date: new Date(), title: "dummy", summary: "stupid stupid stupid stupid this is a dummy summary", image: '' }} /></div>
                        <div className={classes.BlogCardSpacing}><BlogItem hideImg={true} item={{ date: new Date(), title: "dummy", summary: "stupid stupid stupid stupid this is a dummy summary", image: '' }} /></div>
                    </Grid>
                </Grid>
            </Aux>
        ) : null;
    }
}

export default BlogDetail;
