<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    
    protected $table = 'commandes';

    protected $fillable = ['user_id', 'total', 'statut'];
}