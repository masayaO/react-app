export type UserItem = {
  itemId: string;
  itemName: string;
  userId: string;
  description: string;
  imageUrl: string;
};

const isUserItem = (arg: unknown): arg is UserItem => {
  const ui = arg as UserItem;

  return (
    typeof ui?.itemId === 'string' &&
    typeof ui?.itemName === 'string' &&
    typeof ui?.userId === 'string' &&
    typeof ui?.description === 'string' &&
    typeof ui?.imageUrl === 'string'
  );
};

const isUserItems = (args: unknown[]): args is UserItem[] =>
  !args.some((arg) => !isUserItem(arg));

export { isUserItem, isUserItems };
