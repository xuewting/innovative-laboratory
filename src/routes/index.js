// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import LoginRoute from './Login'
import RegisterRoute from './Register'
import LabRoute from './Lab'
import PageNotFound from './PageNotFound'
import Redirect from './PageNotFound/redirect'
import SettingRoute from './Setting'
import ItemPageRoute from './ItemPage'
import ItemInfo from './ItemInfo'
import GoodsRoute from './Goods'
import GoodInfo from './GoodInfo'
import Teacher from './Teacher'
import TeacherInfo from './TeacherInfo'
import LabCharge from './LabCharge'
import ProjectResult from './ProjectResult'
import Message from './Message'
import LabPage from './LabPage'
import Search from './Seach'
import NewItem from './NewItem'
import Personal from './Personal'
import Forget from './Forget'
import Information from './Information'
import Mail from './Mail'
import TEdit from './LabChargeTEdit'
/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    LoginRoute(store),
    ProjectResult(store),
    Message(store),
    Mail(store),
    LabPage(store),
    Forget(store),
    Information(store),
    TEdit(store),
    Search(store),
    LabCharge(store),
    Personal(store),
    RegisterRoute(store),
    NewItem(store),
    TeacherInfo(store),
    GoodInfo(store),
    LabRoute(store),
    SettingRoute(store),
    ItemPageRoute(store),
    ItemInfo(store),
    GoodsRoute(store),
    Teacher(store),
    PageNotFound(),
    Redirect
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
