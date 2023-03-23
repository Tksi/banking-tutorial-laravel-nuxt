<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Account;
use App\Models\Transaction;

class AccountController extends Controller
{
    public function index($user)
    {
        // filter Account by $user
        $account =  Account::where('user', $user)->get();
        if (count($account) == 0) {
            return response()->json(['error' => 'Account not found'], 404);
        }

        // get $user's Transactions
        $transaction = Transaction::where('user', $user)->get();

        $account[0]['transactions'] = $transaction;
        return $account[0];
    }

    public function store(Request $request)
    {

        // check if user already exists
        $account =  Account::where('user', $request['user'])->get();
        if (count($account) > 0) {
            return response()->json(['error' => 'Account already exists'], 400);
        }

        // create Account
        $account = Account::create($request->all());
        $account['transactions'] = [];
        return $account;
    }
}
