import Paths from './paths';

type A<T> = T extends `/${infer U}` ? U : never;
type B<T> = T extends `${infer U}/${infer S}` ? U | B<S> : T;
type C<T> = T extends `:${infer U}` ? U : never;
type Params<T> = C<B<A<T>>>;
type PathKey = keyof typeof Paths;
type Path = typeof Paths[PathKey];
type ParamKeys<T extends Path> = Params<T>;
type PathParams<T extends Path> = {
  path: T;
  params?: { [K in ParamKeys<T>]: string | number };
};
type Args<T extends Path> = ParamKeys<T> extends never
  ? PathParams<T>
  : Required<PathParams<T>>;
const getPath = <T extends Path>({ path, params }: Args<T>): string => {
  if (!params) {
    return path;
  }

  return path
    .split('/')
    .map((str) => {
      const search = /^:.*/;
      const match = search.exec(str);
      if (match) {
        const key = match[0];
        const trimmed = key.substring(1) as ParamKeys<typeof path>;

        return params[trimmed];
      }

      return str;
    })
    .join('/');
};

export default getPath;
