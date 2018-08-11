import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Splash } from './pages'
// import { getToken } from './utils/auth'

class Routes extends React.Component {
  public render(): React.ReactNode {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Splash} />
          {/* <Route exact={true} path="/" component={Home} />
          <PrivateRoute path="/dashboard" component={Dashboard}/>
          <Route path="/unauthorized" component={Unauthorized}/>
          <Route path="/login" component={Register}/>
          <Route path="/signup" component={Register}/>
          <Route exact={true} path="/offer/:id" component={Offer}/> */}

        </Switch>
      </BrowserRouter>
    )
  }
}

// const PrivateRoute = (props: any) => {
//   return (
//     <Route
//       {...props}
//       component={VerifyAccount}
//     />
//   )
// }

// const VerifyAccount = (props: any) => {
//   if(getToken()) {
//     return <Dashboard {...props}/>
//   } else {
//     return (
//       <Redirect
//         to={{
//           pathname: "/login",
//           state: { from: props.location }
//         }}
//       />
//     )
//   }
// }

export default Routes
