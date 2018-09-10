import UserPassword from './UserPassword'

const featuresList = [
    UserPassword
]

// export const featuresComponents = () => {
//     const components = {}
//
//     featuresList.map(feature => {
//         console.log(feature.components);
//         // components.push(feature.components)
//         Object.assign(feature.components, ...components)
//     })
//
//     return components
// }

export const featuresReducers = () => {
    const reducers = []

    featuresList.map(feature => {
        reducers.push(feature.reducer)
    })

    return reducers
}

// export const getComponent = name => featuresList.find(feature => feature.name === name)
