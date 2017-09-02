import React from 'react';
import ReactDOM from 'react-dom';

var meInReact =
  React.createElement('div', {className: 'me'},
    React.createElement('h1', {}, 'An Awesome Person'),
    React.createElement('p', {}, 'Who is learning React'),

    React.createElement('ul', {className: 'my-interests'},
      [
        React.createElement('li', {key: 0}, 'JavaScript'),
        React.createElement('li', {key: 1}, 'React'),
        React.createElement('li', {key: 2}, 'Movies'),
        React.createElement('li', {key: 3}, 'Ice cream')
      ]
    )
  )

ReactDOM.render(
  meInReact,
  document.getElementById('root')
)

export default meInReact;
