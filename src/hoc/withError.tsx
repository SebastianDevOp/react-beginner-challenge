// ### Stretch

// - Add a second HOC `withError<P>(Wrapped)`
// that adds an `error: string | null` prop and renders an
//  error message when set. Compose: `withError(withLoading(UserList))`.

type WithErrorProps = {
  error: string | null;
};

export const withError = <P extends object>(
  Component: React.ComponentType<P>,
) => {
  const WrappedComponent = (props: P & WithErrorProps) => {
    const { error, ...rest } = props;

    if (error) {
      return <div>Failed to Load...</div>;
    }

    return <Component {...(rest as P)} />;
  };

  WrappedComponent.displayName = `withError(${Component.displayName ?? Component.name})`;

  return WrappedComponent;
};
