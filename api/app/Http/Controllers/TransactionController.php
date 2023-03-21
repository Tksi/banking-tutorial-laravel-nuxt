<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transaction;
use App\Models\Account;

class TransactionController extends Controller
{
    public function store($user, Request $request)
    {
        // create Transaction
        $request['user'] = $user;
        $transaction = Transaction::create($request->all());

        // update Account balance
        $account = Account::where('user', $user)->get();
        $account[0]['balance'] += $transaction['amount'];
        $account[0]->save();
        return $transaction;
    }
}
