<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/announcement', [
    \App\Http\Controllers\AnnouncementController::class,
    'getAnnouncement',
]);
Route::get('/references', [
    \App\Http\Controllers\BaseController::class,
    'getAllReference',
]);
Route::get('/referance', [
    \App\Http\Controllers\BaseController::class,
    'getAllReferenceHome',
]);
Route::get('/bussines-partners', [
    \App\Http\Controllers\BaseController::class,
    'getAllPartners',
]);
Route::get('/bussines-partner', [
    \App\Http\Controllers\BaseController::class,
    'getAllPartnersTen',
]);

Route::get('/technical-information', [
    \App\Http\Controllers\BaseController::class,
    'getAllTechnical',
]);

Route::get('/products', [
    \App\Http\Controllers\ProductController::class,
    'getProduct',
]);
Route::get('/product', [
    \App\Http\Controllers\ProductController::class,
    'getProductFour',
]);

Route::get('/product-detail/{slug}', [
    \App\Http\Controllers\ProductController::class,
    'getProductId',
]);
Route::get('/catalog', [
    \App\Http\Controllers\CatalogController::class,
    'getCatalog',
]);
Route::post('/contact', [
    \App\Http\Controllers\ContactController::class,
    'add',
]);

Route::get('/document', [
    \App\Http\Controllers\BaseController::class,
    'getAllDocument',
]);
Route::get('/catalog', [
    \App\Http\Controllers\BaseController::class,
    'getAllCatalog',
]);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
