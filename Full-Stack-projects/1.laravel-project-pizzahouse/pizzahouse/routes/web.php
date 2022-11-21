<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
// the route will look for App\Http\Controllers\PizzaController.php

// i will need to put the routes using named routes to make it easier in the future if i wanted to change the name . like i am putting it into a variable and then using thisvariable
// to protect routes from being accessed by non auth users i use ->middleware('auth');
Route::get('/pizzas', 'App\Http\Controllers\PizzaController@index')->name('pizzas.index');
Route::get('/pizzas/create', 'App\Http\Controllers\PizzaController@create')->name('pizzas.create');
Route::post('/pizzas', 'App\Http\Controllers\PizzaController@store')->name('pizzas.store');
Route::get('/pizzas/{id}', 'App\Http\Controllers\PizzaController@show')->name('pizzas.show');
Route::delete('/pizzas/{id}', 'App\Http\Controllers\PizzaController@destroy')->name('pizzas.destroy');


Route::get('/test', function () {
    // echo / return "test!";
    return ["one" => "this is one" , "two" => "this is two"]; //it will return the assotiative array as json

});

// to stop showing the register page
Auth::routes([
    'register' => false
]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');



