import React from 'react';
import InputRange from 'react-input-range';
import '../../node_modules/react-input-range/dist/react-input-range.css';
import s from './index.css';

class QueryDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: '',
      stars: { min: 0, max: 1000 },
    };
    this.handleStar = this.handleStar.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.doQuery = this.doQuery.bind(this);
  }

  doQuery() {
    this.props.handleQuery({
      language: this.state.language,
      stars: this.state.stars
    });
  }

  handleSearch(event) {
    this.setState({language: this.refs.searchInput.value});
    doQuery();
  }

  handleStar(comp, values) {
    this.setState({ values });
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <input type="text" placeholder="Search By Language" ref="searchInput" />
            <button onClick={this.handleSearch}>Search</button>
          </li>
          <li>
            <label className={s.filter}>
              <span>Stars</span>
              <InputRange
                maxValue={1000}
                minValue={0}
                value={this.state.stars}
                onChange={this.handleStar}
                onChangeComplete={this.doQuery}
              />
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

QueryDrawer.PropTypes = {
  handleQuery: React.PropTypes.func.isRequired,
};

export default QueryDrawer;
