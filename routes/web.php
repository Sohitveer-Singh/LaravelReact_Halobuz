<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/membership', function () {
    $packageDetails = [
        [
            "id" => 1,
            "packageName" => "Gold",
            "price" => 499,
            "features" => "Premium"
        ],
        [
            "id" => 2,
            "packageName" => "Platinum",
            "price" => 899,
            "features" => "Premium"
        ]
    ];
    return Inertia::render('membership', compact('packageDetails'));
})->name('membership');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
