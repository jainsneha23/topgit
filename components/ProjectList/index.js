import React from 'react';
import s from './index.css';

const ProjectList = (props) => (
  <div className={s.main}>
    <p className={s.total}>Total <span>{props.totalCount}</span> repos found!</p>
    <ul className={s.list}>
      {props.items.map((project, i) =>
        <li className={s.listItem} key={i}>
          <a className={s.title} href={project.html_url} target="_blank">{project.full_name}</a>
          <p className={s.language}>
            {project.language}
            <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 14 16" width="14">
              <path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path>
            </svg>
            {project.stargazers_count}
          </p>
          <p className={s.description}>{project.description}</p>
        </li>
      )}
    </ul>
  </div>
);

ProjectList.propTypes = {
  items: React.PropTypes.array.isRequired,
  totalCount: React.PropTypes.number.isRequired,
};

export default ProjectList;
