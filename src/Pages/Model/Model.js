import React from 'react'
import './Model.css'

export default function Modalattachement({open, children}) {
    if (!open) return null;
  return (
    <div>
      <div className="overlaystyle"></div>
      <div className="modalstyle">
        {children}
      </div>
    </div>
    )
}