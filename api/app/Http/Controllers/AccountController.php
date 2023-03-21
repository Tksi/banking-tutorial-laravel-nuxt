<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Account;

class AccountController extends Controller
{
    public function index($user)
    {
        // filter Account by $user
        return Account::where('user', $user)->get();
    }

    public function store(Request $request)
    {
        // create Account
        return Account::create($request->all());
    }
}
