import React, { Component } from 'react';

class BlogDetail extends Component {
    state = {
        item: null
    }

    componentDidMount() {
        this.setState({ item: this.props.history.location.state.item })
    }

    render() {
        return (
            <div>
                Blog Detail
            </div>
        );
    }
}
export default BlogDetail;
