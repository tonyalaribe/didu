@if(\Session::has(‘error’))
    <div class=”alert alert-danger”>
        {{\Session::get(‘error’)}}
    </div>
@endif

<h1>Admin Panel</h1>