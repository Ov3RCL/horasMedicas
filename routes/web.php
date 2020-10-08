<?php

use Illuminate\Support\Facades\Route;




Route::get('/', function(){
    return view('escritorio');
})->name('inicio');

Route::get('horasmedicas', function(){
    return view('horasmedicas');
})->name('horas');

Route::get('especialidad', function(){
    return view('especialidad');
})->name('especialidades');

Route::get('medicos', function(){
    return view('medicos');
})->name('medicos');

Route::get('pacientes', function(){
    return view('pacientes');
})->name('pacientes');