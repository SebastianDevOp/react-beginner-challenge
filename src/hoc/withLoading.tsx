// ## Challenge 8 — Higher-Order Component `withLoading` *(hard)*

// **Goal:** learn HOCs — functions that take a component and return
//  a new component with extra behavior.

// Create `src/hoc/withLoading.tsx` exporting a generic HOC:

// ```ts
// type WithLoadingProps = { isLoading: boolean }

// function withLoading<P extends object>(
//   Wrapped: React.ComponentType<P>
// ): React.ComponentType<P & WithLoadingProps>
// ```

// Behavior:

// - If `isLoading` is `true`, render `<p>Loading...</p>` (or a spinner).
// - Otherwise, render `<Wrapped {...rest} />` — strip `isLoading`
//  via rest-spread: `const { isLoading, ...rest } = props`.
// - Set `displayName` on the returned component:
// `withLoading(${Wrapped.displayName ?? Wrapped.name})`.
// - Refactor `UserList` so it receives `users: User[]`
// as a prop and no longer owns loading/error state.
// - Move the fetch + `users`/`loading`/`error`
//  state up into `App.tsx` (or whichever parent
// renders the wrapped component). The parent passes
//  `isLoading` and `users` down.

// Wrap `UserList` with `const UserListWithLoading =
// withLoading(UserList)` and render
// `<UserListWithLoading isLoading={loading} users={users} />`.

type WithLoadingProps = {
  isLoading: boolean;
};

export const withLoading = <P extends object>(
  Component: React.ComponentType<P>,
) => {
  const WrappedComponent = (props: P & WithLoadingProps) => {
    const { isLoading, ...rest } = props;

    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...(rest as P)} />;
  };

  WrappedComponent.displayName = `withLoading(${Component.displayName ?? Component.name})`;

  return WrappedComponent;
};
