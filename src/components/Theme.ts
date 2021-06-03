import { IBreadcrumb } from './Breadcrumbs/Breadcrumb/interfaces';
import { breadcrumbDefaultStyles } from './Breadcrumbs/Breadcrumb/styles';
import { IButton } from './Button/interfaces';
import { buttonDefaultStyles } from './Button/styles';
import { INavigationBar } from './NavigationBar/interfaces';
import { navigationBarDefaultStyles } from './NavigationBar/styles';
import { ILoader } from './Loader/interfaces';
import { loaderDefaultStyles } from './Loader/styles';
import { IArrow } from './Icons/Arrow/interfaces';
import { arrowDefaultStyles } from './Icons/Arrow/styles';

interface ITheme {
  breadcrumb: IBreadcrumb;
  button: IButton;
  navigationBar: INavigationBar;
  loader: ILoader;
  arrow: IArrow;
}

export const farmerConnectTheme: ITheme = {
  breadcrumb: breadcrumbDefaultStyles,
  button: buttonDefaultStyles,
  navigationBar: navigationBarDefaultStyles,
  loader: loaderDefaultStyles,
  arrow: arrowDefaultStyles,
};

export default ITheme;
