<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', [App\Http\Controllers\ProfileController::class, 'getAllUsers'])->name('users');


// Route::middleware(['auth:sanctum'])->group(function () {
//     Route::get('/users', [App\Http\Controllers\ProfileController::class, 'getAllUsers'])->name('users');
//     Route::get('/profile/edit', [App\Http\Controllers\ProfileController::class, 'edit'])->name('profile.edit');
//     Route::put('/profile', [App\Http\Controllers\ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [App\Http\Controllers\ProfileController::class, 'destroy'])->name('profile.destroy');
// });
