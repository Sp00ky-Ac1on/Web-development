@extends('layouts.app')

@section('content')

<div class="wrapper create-pizza">

    <h1>Create a New Pizza</h1>
    <form action="{{route('pizzas.store')}}" method="post">
        @csrf
        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name">

        <label for="type">Choose Pizza Type:</label>
        <select name="type" id="type">
            <option value="margherita">Margherita</option>
            <option value="hawaiian">hawaiian</option>
            <option value="veg supreme">Veg supreme</option>
            <option value="volcano">Volcano</option>
        </select>

        <label for="base">Choose Pizza Base:</label>
        <select name="base" id="base">
            <option value="cheesy crust">cheesy crust</option>
            <option value="garlic crust">garlic crust</option>
            <option value="thin & crispy">thin & crispy</option>
            <option value="thick">thick</option>
        </select>


        <fieldset>
            <label>Extra toppings</label><br>
            <input type="checkbox" name="toppings[]" id="toppings" value="mushrooms">Mushrooms <br>
            <input type="checkbox" name="toppings[]" id="toppings" value="peppers">peppers <br>
            <input type="checkbox" name="toppings[]" id="toppings" value="garlic">garlic <br>
            <input type="checkbox" name="toppings[]" id="toppings" value="olives">olives <br>
        </fieldset>

        <button type="submit" name="submit">Make Order</button>
        <a href="/" id="cancel">Cancel</a>
    </form>

</div>


@endsection
