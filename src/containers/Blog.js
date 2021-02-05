import React, { Component } from 'react';
import BlogItem from '../components/BlogItem/BlogItem';
import FeaturedBlogItem from '../components/FeaturedBlogItem/FeaturedBlogItem';
import Grid from '@material-ui/core/Grid';
import firebase from "../db/firebase";
import classes from './Blog.css'

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
                items.push(doc.data());
            });
            this.setState({ isLoading: false, posts: items });
        });
    }

    createBlogFeed() {
        const sortedPosts = this.state.posts.sort((a, b) => b.date.seconds - a.date.seconds)
        const blogItems = sortedPosts.map((post) => {
            const p = {
                ...post
            }
            p.date = new Date(post.date.seconds * 1000); //modify date to be used by component
            return (
                <Grid item xs={12} md={6}>
                    <BlogItem item={p} />
                </Grid>
            )
        });

        //set featured post to most recent post
        if (blogItems.length > 0 && sortedPosts.length > 0) blogItems[0] =
            <Grid item xs={12}>
                <FeaturedBlogItem item={sortedPosts[0]} />
            </Grid>

        return blogItems;
    }

    render() {
        return (
            <div className={classes.Blog}>
                <Grid container spacing={0}>
                    {this.createBlogFeed()}
                </Grid>
            </div>
        );
    }
}
export default Blog;
