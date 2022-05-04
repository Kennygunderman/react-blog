import React, { Component } from 'react';
import BlogItem from '../../components/BlogItem/BlogItem';
import FeaturedBlogItem from '../../components/FeaturedBlogItem/FeaturedBlogItem';
import { Grid, Fade } from '@material-ui/core';
import firebase from "../../firebase";
import classes from './Blog.css';
class Blog extends Component {
    state = {
        isLoading: false,
        posts: []
    }

    postsRef = firebase.firestore().collection("posts");

    componentDidMount() {
        this.setState({ isLoading: true });
        this.postsRef.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                const item = {
                    ...data,
                    date: new Date(data.date.seconds * 1000), //format data as it comes in from firebase
                    id: doc.id
                }
                items.push(item);
            });
            this.setState({ isLoading: false, posts: items });
        });
    }

    createBlogFeed() {
        const sortedPosts = this.state.posts.sort((a, b) => b.date.getTime() - a.date.getTime())
        const blogItems = sortedPosts.map((post) => {
            const p = {
                ...post
            }

            return (
                <Grid item xs={12} md={6} key={p.id}>
                    <BlogItem item={p} clickHandler={this.handleBlogItemClicked} />
                </Grid>
            )
        });

        //set featured post to most recent post
        if (blogItems.length > 0 && sortedPosts.length > 0) blogItems[0] =
            <Grid item xs={12} key={sortedPosts[0].id}>
                <FeaturedBlogItem item={sortedPosts[0]} clickHandler={this.handleBlogItemClicked} />
            </Grid>

        return blogItems;
    }

    //Show detail
    handleBlogItemClicked = (item) => {
        this.props.history.push({ pathname: `/blog/detail/${item.id}`, state: { item: item } });
    }

    render() {
        return (
            <Fade in timeout={{ enter: 1000 }}>
                <div className={classes.Container}>
                    <Grid container spacing={3}>
                        {this.createBlogFeed()}
                    </Grid >
                    <div className={classes.Footer} />
                </div>
            </Fade>
        );
    }
}
export default Blog;
