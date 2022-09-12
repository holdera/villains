import React from "react";

const Container = ({children, addedClasses}) => {
    const classes = "container antialiased prose prose-slate mx-auto w-full max-w-6xl px-5 xl:(px-0) "
    return(
        <div className={[classes + addedClasses]}>
            {children}
        </div>
    )
}

export default Container