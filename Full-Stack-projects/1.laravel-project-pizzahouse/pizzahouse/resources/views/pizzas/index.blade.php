@extends('layouts.app')

@section('content')

<h1>Pizza Orders</h1><br>
<div class="wrapper pizza-index">
    <!-- <p> <b>{{$name}}</b></p>
    <p><b>{{$email}}</b></p> -->

    @foreach($pizzas as $pizza)
    <div class="pizza-item">
        <h4>
            <img src="/img/pizza.png" alt="pizza icon">
            <a href="{{ route('pizzas.show',$pizza->id) }}">{{$pizza->name}}</a>
        </h4>
    </div>
    @endforeach

</div>

@endsection
