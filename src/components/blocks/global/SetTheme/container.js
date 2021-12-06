import { connect } from 'react-redux'

import { setTheme } from '@/actions'

import SetTheme from './component'

const mapStateToProps = store => ({
  theme: store.theme.theme,
})

const mapDispatchToProps = dispatch => ({
  onSetTheme: theme => dispatch(setTheme(theme)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SetTheme)
