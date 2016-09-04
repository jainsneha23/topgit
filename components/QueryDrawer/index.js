import React from 'react';
import InputRange from 'react-input-range';
import '../../node_modules/react-input-range/dist/react-input-range.css';
import s from './index.css';

class QueryDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      language: '',
      stars: {
        min: 0,
        max: 15000,
      },
      active: false,
      languageOptions: [],
    };
    this.toggle = this.toggle.bind(this);
    this.handleStar = this.handleStar.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.doQuery = this.doQuery.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/mayurah/5a4d45d12615d52afc4d1c126e04c796/raw/ccbba9bb09312ae66cf85b037bafc670356cf2c9/languages.json', { method: 'GET' }).then((resp) => {
      resp.json().then(data => {
        this.languageOptions = data;
        this.setState({
          languageOptions: data,
        });
      }, err => alert(err.message));
    }, err => alert(err.message));
  }

  doQuery() {
    this.props.handleQuery({
      language: this.state.language,
      stars: this.state.stars,
    });
  }

  handleSearch() {
    this.setState({
      language: this.refs.searchInput.value,
    });
  }

  handleStar(comp, values) {
    this.setState({ stars: values });
  }

  toggle() {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <div className={`${s.drawer} ${this.state.active ? s.drawer_active : ''}`}>
        <div onClick={this.toggle} className={s.handle}> Filters </div>
        <ul className={s.list}>
          <li className={`${s.listItem} ${s.searchInput}`}>
            <input
              type="text"
              placeholder="Search By Language"
              ref="searchInput"
              list="languages"
              onChange={this.handleSearch}
            />
            <datalist id="languages">
              {this.state.languageOptions.map((lang, i) =>
                <option key={i} value={lang} />
              )}
            </datalist>
            <button onClick={this.doQuery}>Search</button>
          </li>
          <li className={s.listItem}>
            <label className={s.filter}>
              <span>Stars</span>
              <InputRange
                maxValue={15000}
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

QueryDrawer.propTypes = {
  handleQuery: React.PropTypes.func.isRequired,
};

export default QueryDrawer;
