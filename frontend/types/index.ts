import { Type } from '@sinclair/typebox';
import type { Static } from '@sinclair/typebox';

export type TemplateId = 'dashboard' | 'login';

export type EventListeners = {
  id: string;
  eventHandler: (e: Event) => void;
}[];

export type TemplateInfo = {
  init?: () => void;
  eventListners: EventListeners;
};

export type ErrorElementId =
  | 'loginError'
  | 'registerError'
  | 'transactionError';

export type DashboardId =
  | 'balance'
  | 'currency'
  | 'description'
  | 'transactions';

export const _Transaction = Type.Object({
  id: Type.Optional(Type.String()),
  date: Type.String(),
  object: Type.String(),
  amount: Type.Number(),
});

export const _AccountsRequestBody = Type.Object({
  user: Type.String(),
  description: Type.String(),
  currency: Type.String(),
  balance: Type.Number(),
});

export const _Account = Type.Intersect([
  _AccountsRequestBody,
  Type.Object({ transactions: Type.Array(_Transaction) }),
]);

export const _ErrorReply = Type.Object({
  error: Type.String(),
});

export const _ReturnString = Type.String();

export const _UserParam = Type.Object({ user: Type.String() });

export const _DeleteTransactionParam = Type.Intersect([
  _UserParam,
  Type.Object({ id: Type.String() }),
]);

export type Account = Static<typeof _Account> | null;

export type Transaction = Static<typeof _Transaction>;

export type AccountsRequestBody = Static<typeof _AccountsRequestBody>;

export type ErrorReply = Static<typeof _ErrorReply>;

export type ReturnString = Static<typeof _ReturnString>;

export type UserParam = Static<typeof _UserParam>;

export type DeleteTransactionParam = Static<typeof _DeleteTransactionParam>;
