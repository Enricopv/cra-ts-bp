import Paper from '@material-ui/core/Paper'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import * as React from 'react'

const styles = (theme: Theme) => createStyles({
  root: {
    width: '95%',
    marginTop: theme.spacing.unit * 3,
  },
})

interface Props extends WithStyles<typeof styles>{
  children?: any,
  width?: number | string,
  noPadding?: boolean
}

class StandardCard extends React.PureComponent<Props> {
  public render() {
    const { classes, width, noPadding, ...rest } = this.props
    return(
      <Paper className={classes.root} {...rest} style={{width: width || null}}>
        <div style={{padding: noPadding ? 0 : 30}}>
          {this.props.children}
        </div>
      </Paper>
    )
  }
} 

export default withStyles(styles, { withTheme: true })(StandardCard)