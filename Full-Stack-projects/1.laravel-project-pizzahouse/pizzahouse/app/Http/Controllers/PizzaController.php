<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pizza;

class PizzaController extends Controller{

    // in case i wanted to apply the authentication for all website pages
    public function __construct(){
        $this->middleware('auth')->except(['store', 'create']);
    }

    public function index(){

        // $pizzas = Pizza::all();
        // $pizzas = Pizza::orderBy('price', 'desc')->get(); //i can use this to get it in specific order
        // $pizzas = Pizza::where('name','super supreme')->get(); //to get a specific record
        $pizzas = Pizza::latest()->get();

        $name = request('name');
        $email = request('email');

        return view('pizzas.index', ['pizzas' => $pizzas ,
                    'name' => $name ,
                    'email'=> $email
                ]);
    }

    public function show($id){
    // to get a record from the db
        $pizza = Pizza::findOrFail($id);  //findorfail to return 404 if not exist
        return view('pizzas.show',['pizza'=> $pizza]);
    }

    public function create(){
        return view('pizzas.create');
    }

    public function store(){

        $pizza = new Pizza();

        $pizza->name = request('name'); //it's like $_POST['name']
        $pizza->type = request('type');
        $pizza->base = request('base');
        $pizza->toppings = request('toppings');

        $pizza->save(); //insert the inputs to db
        // error_log($pizza);
        return redirect('/')->with('mssg','thanks for your order!'); //to add a message
    }

    public function destroy($id){
        $pizza = Pizza::findOrFail($id);
        $pizza->delete();

        return redirect('/pizzas');
    }

}
