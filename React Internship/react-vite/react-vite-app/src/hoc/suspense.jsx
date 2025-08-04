import React, {Suspense} from "react";

// eslint-disable-next-line no-unused-vars
function withSuspense(Component){
    return function WrappedComponent(props){
        return (
            <Suspense fallback="....Loading">
                <Component {...props} />
            </Suspense>
        );
    };
};

export default withSuspense;