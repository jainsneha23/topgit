import React from 'react';
import s from './index.css';

class Pagination extends React.Component {

  constructor(props) {
    super(props);
    const { noOfpages, pages } = this.calculatePages(props);
    this.state = {
      noOfpages,
      pages,
      activePage: 1,
    };
    this.prev = this.prev.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.next = this.next.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.totalCount !== this.props.totalCount) {
      const { noOfpages, pages } = this.calculatePages(newProps);
      this.setState({
        noOfpages,
        pages,
        activePage: 1,
      });
    }
  }

  calculatePages(obj) {
    const noOfpages = Math.ceil(obj.totalCount / obj.itemLength);
    const pages = Array.from({ length: Math.min(this.props.length, noOfpages) }, (v, i) => i + 1);
    return { noOfpages, pages };
  }

  prev() {
    if (this.state.activePage > 1) {
      this.setState({ activePage: this.state.activePage - 1 });
      if (this.state.activePage - 1 < this.state.pages[0]) {
        this.setState({
          pages: this.state.pages.map(v => v - 1),
        });
      }
      this.props.handlePage(this.state.activePage - 1);
    }
  }

  handleChange(idx) {
    this.setState({ activePage: idx });
    this.props.handlePage(idx);
  }

  next() {
    if (this.state.activePage < this.state.noOfpages) {
      this.setState({ activePage: this.state.activePage + 1 });
      if (this.state.activePage + 1 > this.state.pages[9]) {
        this.setState({
          pages: this.state.pages.map(v => v + 1),
        });
      }
      this.props.handlePage(this.state.activePage + 1);
    }
  }

  render() {
    return (
      <ul className={s.pagination}>
        <li
          className={`${s.page} ${this.state.activePage === 1 ? s.page_disabled : ''}`}
          onClick={this.prev}
        >&lt;</li>
        {this.state.pages.map((i) =>
          <li
            className={`${s.page} ${i === this.state.activePage ? s.page_active : ''}`}
            key={i}
            onClick={() => this.handleChange(i)}
          >{i}
          </li>
        )}
        <li
          className={`${s.page} ${this.state.activePage === this.state.noOfpages ? s.page_disabled : ''}`}
          onClick={this.next}
        >&gt;</li>
      </ul>
    );
  }
}

Pagination.propTypes = {
  handlePage: React.PropTypes.func.isRequired,
  itemLength: React.PropTypes.number.isRequired,
  totalCount: React.PropTypes.number.isRequired,
  length: React.PropTypes.number.isRequired,
};

export default Pagination;
