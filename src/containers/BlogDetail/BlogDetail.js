import React, { Component } from 'react';
import DetailContent from '../../components/DetailContent/DetailContent';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import ReactHtmlParser from 'react-html-parser';
import { Grid, Typography } from '@material-ui/core';
import Comments from '../../components/Comments/Comments';
import BlogItem from '../../components/BlogItem/BlogItem';
import classes from './BlogDetail.css';
import firebase from "../../firebase";

class BlogDetail extends Component {
    state = {
        comments: null,
        isLoadingComments: false,
        otherPosts: [],
        isLoadingPosts: false,
        item: null //this is the blog item the user is viewing
    }

    unsubscribeComments = null
    unsubscribeBlogPosts = null

    componentDidMount() {
        const item = this.props.history.location.state.item;
        this.createSubscriptionsForItem(item);
    }

    createSubscriptionsForItem(item) {
        this.setState({ isLoadingComments: true, comments: null, isLoadingPosts: true, item: item });
        this.unsubscribeComments = firebase.firestore().collection("comments").onSnapshot((querySnapshot) => {
            const comments = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (data.postId === item.id) {
                    const comment = {
                        ...data,
                        date: new Date(data.date.seconds * 1000), //format date as it comes in from firebase
                        id: doc.id
                    }
                    comments.push(comment);
                }
            });

            comments.sort((a, b) => b.date.getTime() - a.date.getTime());
            this.setState({
                isLoadingComments: false,
                comments: comments
            });
        });

        this.unsubscribeBlogPosts = firebase.firestore().collection("posts").onSnapshot((querySnapshot) => {
            const otherPosts = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (doc.id !== item.id) {//don't show the post we are currently on
                    const post = {
                        ...data,
                        date: new Date(data.date.seconds * 1000), //format data as it comes in from firebase
                        id: doc.id
                    }
                    otherPosts.push(post);
                }

                otherPosts.sort((a, b) => b.date.getTime() - a.date.getTime());
                this.setState({
                    isLoadingPosts: false,
                    otherPosts: otherPosts
                });
            });
        });
    }

    createOtherPostsFeed() {
        let blogItems = null;
        if (this.state.otherPosts != null) {
            blogItems = this.state.otherPosts.map((post) =>
                <div key={post.id} className={classes.BlogCardSpacing}>
                    <BlogItem hideImg={true} item={post} clickHandler={this.handleBlogItemClicked} />
                </div>
            );
        }
        return blogItems;
    }

    handleBlogItemClicked = (item) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.props.history.push({ pathname: `/blog/detail/${item.id}`, state: { item: item } });

        this.unsubscribeComments();
        this.unsubscribeBlogPosts();
        this.createSubscriptionsForItem(item);
    }

    render() {
        return this.state.item != null ? (
            <div className={classes.Container}>
                <DetailHeader title={this.state.item.title} image={this.state.item.image} />
                <Grid container spacing={0}>
                    <Grid item md={9} xs={12}>
                        <div className={classes.DetailSpacing}>
                            <DetailContent
                                title={this.state.item.title}
                                date={this.state.item.date}>
                                {ReactHtmlParser(this.state.item.summary)}
                            </DetailContent>
                            {this.state.comments != null ? <Comments comments={this.state.comments} postId={this.state.item.id} /> : null}
                        </div>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Typography variant="h6">Other Posts</Typography>
                        <div className={classes.Divider} />
                        {this.createOtherPostsFeed()}
                    </Grid>
                </Grid>
                <div className={classes.Footer} />
            </div>
        ) : null;
    }
}

export default BlogDetail;