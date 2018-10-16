import { get, some } from 'lodash';
// import Spinning from 'grommet/components/icons/Spinning';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { branch, renderComponent, renderNothing } from 'recompose';

export const renderWhile = (condition, component) =>
    branch(condition, renderComponent(component));

export const renderWhileLoading = (propNames, component = renderNothing()) =>
    renderWhile(
        props => some(propNames, (name) => !isLoaded(get(props, name))),
        component
    );

export const renderIfEmpty = (propNames, component) =>
    renderWhile(
        props => some(propNames, (name) => {
            const propValue = get(props, name);
            return isLoaded(propValue) && isEmpty(propValue);
        }),
        component
    );
