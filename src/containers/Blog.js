import React, { Component } from 'react';
import BlogItem from '../components/BlogItem/BlogItem';
import FeaturedBlogItem from '../components/FeaturedBlogItem/FeaturedBlogItem';
import classes from './Blog.css'

class Blog extends Component {
    render() {
        return (
            <div className={classes.Blog}>
                <FeaturedBlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>
        );
    }
}
export default Blog;
