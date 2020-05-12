export const generateInProgressActionTypeName = basicActionName =>
    `${basicActionName}_IN_PROGRESS`;
export const generateSuccessActionTypeName = basicActionName =>
    `${basicActionName}_SUCCESS`;
export const generateErrorActionTypeName = basicActionName =>
    `${basicActionName}_ERROR`;

export const asyncActionsMiddleware = store => next => async action => {
    const isActionAsync = action.hasOwnProperty('async');
    if (!isActionAsync) {
        return next(action);
    } else {
        let {
            httpMethodToInvoke,
            params,
            type,
            onErrorHandler,
            networkLabel
        } = action;
        networkLabel = networkLabel ? networkLabel : 'general';
        const inProgressType = generateInProgressActionTypeName(type);

        store.dispatch({ type: inProgressType });
        store.dispatch({
            type: "ANOTHER_REQUEST_IN_PROGRESS",
            networkLabel
        });

        httpMethodToInvoke(...params).then((res, err) => {
            if (err) {
                const errorType = generateErrorActionTypeName(type);
                store.dispatch({ type: errorType, err, networkLabel });
                if (onErrorHandler) {
                    onErrorHandler(err, store.dispatch);
                }
            } else {
                const successType = generateSuccessActionTypeName(type);
                store.dispatch({
                    type: successType,
                    ...res
                });
            }
            store.dispatch({ type: "REQUEST_OVER", networkLabel });
        });

        return next(action);
    }
};

