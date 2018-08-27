import { ApolloClient } from 'apollo-client'
import * as React from 'react'
import { withApollo } from 'react-apollo'
import Dashboard  from './Dashboard'
import { match as Match, Route, Switch } from "react-router-dom";
import Page1 from "./pages/Page1/Page1"

interface Props {
  client: ApolloClient<any>
  history: History
  match: Match<Parms>
  businessName: string
  employeeName: string
}

interface Parms {
  url: string
}


interface State {
  loading?: boolean
}

class Index extends React.Component<Props, State> {
  constructor(props:any) {
    super(props)
    this.state = {
      loading: true
    }
}

  public render() {
    const { match } = this.props
    return (
      <Dashboard>
        <Switch>
            <Route exact={true} path={match.url} component={Page1} />
            <Route
              exact={true}
              path={match.url + "/page1"}
              component={Page1}
            />
            {/* <Route
              exact={true}
              path={match.url + "/referrals"}
              component={Referrals}
            />
            <Route
              exact={true}
              path={match.url + "/adminsettings"}
              component={AdminSettings}
            />
            <Route
              exact={true}
              path={match.url + "/messageeditor"}
              component={MessageEditor}
            />
            <Route
              exact={true}
              path={match.url + "/levelseditor"}
              component={LevelsEditor}
            />
            <Route
              exact={true}
              path={match.url + "/rewardseditor"}
              component={RewardsEditor}
            />
            <Route
              exact={true}
              path={match.url + "/earnedrewards"}
              component={EarnedRewards}
            /> */}
          </Switch>
      </Dashboard>
    )
  }
}

export default withApollo(Index)