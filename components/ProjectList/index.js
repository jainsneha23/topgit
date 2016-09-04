import React from 'react';
import s from './index.css';

const ProjectList = (props) => (
  <div>
    <p className={s.total}>Total <span>{props.totalCount}</span> repos found!</p>
    <ul className={s.list}>
      {props.items.map((project, i) =>
        <li className={s.listItem} key={i}>
          <a className={s.title} href={project.html_url} target="_blank">{project.full_name}</a>
          <p className={s.language}>{project.language}</p>
          <p className={s.description}>{project.description}</p>
        </li>
      )}
    </ul>
  </div>
);

ProjectList.PropTypes = {
  items: React.PropTypes.array.isRequired,
  totalCount: React.PropTypes.number.isRequired,
};

export default ProjectList;
