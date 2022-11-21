@extends('layouts.app')

@section('content')

<div class="wrappar pizza-details">
    <h1>Order for {{$pizza->name}}</h1>
    <p class="type">type -{{$pizza->type}}</p>
    <p class="base">Base - {{$pizza->base}} </p>
    <p class="toppings">Extra toppings:</p>
    <ul>
        @foreach($pizza->toppings as $topping)
            <li>{{ $topping }}</li>

        @endforeach
    </ul>

    <form action="{{ route('pizzas.destroy' , $pizza->id) }}" method="POST">
        @csrf
        @method('DELETE')
        <button >Complete Order</button>
    </form>

</div>

<a href="{{route('pizzas.index')}}" class="back"><- Back to all pizzas page</a>
<a href="/" class="back"><- Back to The Main page</a>




@endsection
