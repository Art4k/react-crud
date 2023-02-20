const SinglePostPath = "/post/" as const;

const routes = {
  HomePage: "/",
  SinglePost: {
    routePath: `${SinglePostPath}:id`,
    createLink: (id: number) => `${SinglePostPath}${id}`,
  },
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
