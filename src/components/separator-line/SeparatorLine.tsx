import React from 'react'

const lineStyles = {
    border: '1px solid #e2e2e2',
    margin: '5rem 5rem 1rem 5rem',
    width: '10%',
  }

const SeparatorLine = (): JSX.Element => (
  <div style={{ display: 'flex', justifyContent: 'space-around ' }}>
    <div
      style={lineStyles}
    />
    <div
      style={lineStyles}
    />
  </div>
)

export default SeparatorLine
