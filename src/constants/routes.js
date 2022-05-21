const ROUTES = {
    HOME: () => {
        return '/';
    },
    ABOUT: () => {
        return '/about';
    },
    SOMETHINGS: () => {
        return '/somethings'
    },
    SOMETHING: (id) => {
        if(id) {
            return `${ROUTES.SOMETHINGS()}/${id}`;
        }

        return `${ROUTES.SOMETHINGS()}/:id`;
    },
    NOT_FOUND: () => {
        return '*';
    }
};

export default ROUTES;