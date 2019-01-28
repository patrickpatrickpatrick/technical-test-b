import React from 'react'

export default props => (
  <svg width="1em" height="1em" viewBox="0 0 20 16" {...props}>
    <title>{'underground'}</title>
    <g transform="translate(2)" fill="none" fillRule="evenodd">
      <circle stroke="#DA2728" strokeWidth={3} cx={8} cy={8} r={6.5} />
      <path
        d="M0 8h16"
        stroke="#0522A5"
        strokeWidth={4}
        strokeLinecap="square"
      />
    </g>
  </svg>
);