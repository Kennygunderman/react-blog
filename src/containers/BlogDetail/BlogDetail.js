import React, { Component } from 'react';
import DetailContent from '../../components/DetailContent/DetailContent';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import Aux from '../../hoc/Auxiliary';
import ReactHtmlParser from 'react-html-parser';
import { Grid, Typography } from '@material-ui/core';
import Comments from '../../components/Comments/Comments';
import BlogItem from '../../components/BlogItem/BlogItem';
import classes from './BlogDetail.css';

class BlogDetail extends Component {
    state = {
        item: null
    }

    componentDidMount() {
        console.log(this.props);
        this.setState({ item: this.props.history.location.state.item })
    }

    render() {
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
                            <Comments />
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
