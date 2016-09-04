/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import ProjectList from '../../components/ProjectList';
import QueryDrawer from '../../components/QueryDrawer';
import s from './Home.css';

class HomePage extends React.Component {

  static propTypes = {
    projects: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      total_count: this.props.projects.total_count,
      items: this.props.projects.items
    };
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery(queryData) {
    fetch(`https://api.github.com/search/repositories?q=language:${queryData.language}+stars:${queryData.stars.min}..${queryData.stars.max}&sort=stars&order=desc`, { method: 'GET' }).then((resp) => {
      resp.json().then(data => {
        this.setState({
          total_count: data.total_count,
          items: data.items,
        });
      }, err => alert(err.message));
    }, err => alert(err.message));
  }

  render() {
    return (
      <Layout className={s.content} >
        <QueryDrawer handleQuery={this.handleQuery} />
        <ProjectList items={this.state.items} totalCount={this.state.total_count} />
      </Layout>
    );
  }

}

export default HomePage;
