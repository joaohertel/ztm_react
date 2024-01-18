export const customLoggerMiddleware = (store) => (next) => (action) => {

    if(!action.type)
        return next(action);

    console.log('------------------------');
    console.log('-- Custom Middleware start ---');
    console.log('previous state = ', store.getState());
    console.log('before action.type = ', action.type);
    console.log('before action.payload = ', action.payload);
    
    next(action);
    
    console.log('after state = ', store.getState());
    console.log('-- Custom Middleware end ---');
    console.log('------------------------');
}