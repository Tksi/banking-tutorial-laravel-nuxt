import type { Account, Transaction, AccountsRequestBody } from 'types';

const HOST = 'localhost:8000';
type ErrRes = { error: string };

export const createAccount = (
  AccountsRequestBody: AccountsRequestBody
): Promise<Account> => {
  console.log(AccountsRequestBody);

  return fetch(`//${HOST}/api/accounts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(AccountsRequestBody),
  }).then(async (res) => {
    if (res.ok) {
      return res.json() as Promise<Account>;
    }

    throw new Error(((await res.json()) as ErrRes).error);
  });
};

export const getAccount = ({
  userName,
}: {
  userName: string;
}): Promise<Account> => {
  return fetch(`//${HOST}/api/accounts/${encodeURIComponent(userName)}`).then(
    async (res) => {
      if (res.ok) {
        return res.json() as Promise<Account>;
      }

      throw new Error(((await res.json()) as ErrRes).error);
    }
  );
};

export const sendTransaction = ({
  account,
  transaction,
}: {
  account: Account;
  transaction: Transaction;
}): Promise<Account> => {
  return fetch(`//${HOST}/api/accounts/${account?.user}/transactions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transaction),
  }).then(async (res) => {
    if (res.ok) {
      return res.json() as Promise<Account>;
    }

    throw new Error(((await res.json()) as ErrRes).error);
  });
};
