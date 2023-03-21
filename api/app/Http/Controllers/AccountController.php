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
        // get $user's Transactions
        $transaction = Transaction::where('user', $user)->get();

        $account[0]['transactions'] = $transaction;
        return $account[0];
    }

    public function store(Request $request)
    {
        // create Account
        $account = Account::create($request->all());
        $account['transactions'] = [];
        return $account;
    }
}
