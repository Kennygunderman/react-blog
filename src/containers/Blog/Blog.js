import React, { Component } from 'react';
import BlogItem from '../../components/BlogItem/BlogItem';
import FeaturedBlogItem from '../../components/FeaturedBlogItem/FeaturedBlogItem';
import Grid from '@material-ui/core/Grid';
import firebase from "../../db/firebase";
class Blog extends Component {
    state = {
        isLoading: false,
        posts: []
    }

    postsRef = firebase.firestore().collection("posts");

    componentDidMount() {
        console.log(this.props);
        this.setState({ isLoading: true });
        this.postsRef.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                const item = {
                    ...doc.data(),
                    id: doc.id
                }
                items.push(item);
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
        this.props.history.push({ pathname: '/detail', state: { item: item } });
    }

    render() {
        return (
            <div>
                <Grid container spacing={0}>
                    {this.createBlogFeed()}
                </Grid>
            </div>
        );
    }
}
export default Blog;
