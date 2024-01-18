import { createSelector } from "reselect";

const categoriesStateSliceSelector = (state) => {
    console.log('1 - categoriesStateSliceSelector running!');
    return state.categoryState
}

export const categoriesSelector = createSelector(
    [categoriesStateSliceSelector], // slices that i need to produce desired output
    (categoriesStateSlice) => {
        console.log('2 - categoriesSelector running!');
        return categoriesStateSlice.categories;
    }
);

export const categorySelector = createSelector(
    [categoriesSelector],
    (categoriesInitialArray) => categoriesInitialArray.reduce((acc, data) => {
        const { title, items } = data;
        acc[title.toLowerCase()] = items;
        console.log('3 - categorySelector running!');
        return acc;
    }, {})
);

// export const categorySelector = (state) => {

//     console.log('state = ', state);
//     const categoryMap = state.categoryState.categories.reduce((acc, data) => {
//         const { title, items } = data;
//         acc[title.toLowerCase()] = items;
//         return acc;
//     }, {});
    
//     return categoryMap;
    
// };