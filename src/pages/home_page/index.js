import React from 'react'
import { Navigate } from "react-router-dom";
function HomePage() {
  return (
    <div>
        Home Page
        <Navigate to="/kanban" replace={true} />
    </div>
  )
}

export default HomePage