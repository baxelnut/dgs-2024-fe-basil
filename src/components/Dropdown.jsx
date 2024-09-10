import React from 'react'

export default function Dropdown() {
  return (
    <div className="dropdown ">
    <button
      className="btn btn-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      📅 Calendar
    </button>
    <ul className="dropdown-menu">
      <li>
        <a className="dropdown-item" href="#">
          Action
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Another action
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
      </li>
    </ul>
  </div>
  )
}
