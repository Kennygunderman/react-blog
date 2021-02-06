import React, { Component } from 'react';
import DetailContent from '../../components/DetailContent/DetailContent';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import Aux from '../../hoc/Auxiliary';
import ReactHtmlParser from 'react-html-parser';

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
                <DetailContent title={this.state.item.title} date={this.state.item.date}>
                    {ReactHtmlParser(this.state.item.summary)}
                </DetailContent>
            </Aux>
        ) : null;
    }
}

export default BlogDetail;
