import React from 'react'

import ShoutBox from '../components/common/ShoutBox';


const NotFound = () => {
  return (
    <main>
      <h1>Page Not Found</h1>
      <ShoutBox 
        title="Holy Moley!"
        content="We've searched high and low, but can't find the page you're looking for."
        button="Return Home"
        page="notFound"
      />
    </main>
  )
}

export default NotFound