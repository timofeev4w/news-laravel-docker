<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
   
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <title>Новости</title>
</head>
<body>
    <div id="app">
        <v-header></v-header>
        <router-view></router-view>
    </div>

    {{-- <script src="./js/app.js"></script> --}}
</body>
</html>