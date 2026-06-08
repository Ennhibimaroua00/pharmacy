<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Panier extends Model
{
    // L-panier taba3 l user wa7d
public function user()
{
    return $this->belongsTo(User::class);
}

// L-panier fih bzaf dial les produits (Relation Many-to-Many via l-table pivot)
public function produits()
{
    return $this->belongsToMany(Produit::class, 'panier_produits')
                ->withPivot('quantite')
                ->withTimestamps();
}
}
