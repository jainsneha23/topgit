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
import Spinner from '../../components/Spinner';
import Pagination from '../../components/Pagination';
import s from './Home.css';

class HomePage extends React.Component {

  static propTypes = {
    projects: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      total_count: this.props.projects.total_count,
      items: this.props.projects.items,
      spinner: false,
      queryData: {
        language: '',
        stars: {
          min: 0,
          max: 100000,
        },
        page: 1,
      },
    };
    this.handleQuery = this.handleQuery.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.doAjax = this.doAjax.bind(this);
  }

  componentDidMount() {
    document.title = 'TopGit';
  }

  doAjax(queryData) {
    this.setState({ spinner: true });
    fetch(`https://api.github.com/search/repositories?q=language:${queryData.language}+stars:${queryData.stars.min}..${queryData.stars.max}&sort=stars&order=desc&page=${queryData.page}&per_page=10`, { method: 'GET' }).then((resp) => {
      resp.json().then(data => {
        this.setState({
          total_count: data.total_count,
          items: data.items,
          spinner: false,
        });
      }, err => {
        this.setState({ spinner: false });
        alert(err.message);
      });
    }, err => {
      this.setState({ spinner: false });
      alert(err.message);
    });
  }

  handlePage(page) {
    const currState = { ...this.state.queryData };
    currState.page = page;
    this.setState({ queryData: currState });
    this.doAjax(currState);
  }

  handleQuery(queryData) {
    const currState = { ...this.state.queryData };
    currState.language = queryData.language;
    currState.stars = queryData.stars;
    currState.page = 1;
    this.setState({ queryData: currState });
    this.doAjax(currState);
  }

  render() {
    return (
      <Layout className={s.content} >
        <Spinner active={this.state.spinner} />
        <ProjectList items={this.state.items} totalCount={this.state.total_count} />
        <QueryDrawer handleQuery={this.handleQuery} />
        <Pagination
          handlePage={this.handlePage}
          itemLength={this.state.items.length}
          totalCount={this.state.total_count}
          length={10}
        />
      </Layout>
    );
  }

}

export default HomePage;
