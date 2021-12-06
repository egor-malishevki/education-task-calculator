import React from 'react'

import Header from '@/components/blocks/global/Header'

const StandardLayout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
)

export default StandardLayout
